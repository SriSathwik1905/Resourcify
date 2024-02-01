# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Initial data
employee = pd.read_excel('employee.xlsx')
task = pd.read_excel('task.xlsx')

@app.route('/api/employee/get_data')
def get_data():
    # Reload data from Excel file before responding
    global employee
    employee = pd.read_excel('employee.xlsx')
    return jsonify(employee.to_dict(orient='records'))

@app.route('/api/employee/filter_skills')
def filter_skills():
    # Reload data from Excel file before processing the request
    global employee
    employee = pd.read_excel('employee.xlsx')

    # Get skills from query parameters
    skill1 = request.args.get('skill1')
    skill2 = request.args.get('skill2')

    # Check if at least one skill is provided
    if skill1 or skill2:
        # Filter employee based on the provided skill(s)
        matching_data = employee[employee[['Skill1', 'Skill2', 'Skill3']].apply(lambda row: skill1 in row.values or skill2 in row.values, axis=1)]
        remaining_data = employee.drop(matching_data.index)
        
        # Concatenate matching_data and remaining_data
        result_data = pd.concat([matching_data, remaining_data])
        
        return jsonify(result_data.to_dict(orient='records'))
    else:
        # If no skills are provided, return all records
        return jsonify(employee.to_dict(orient='records'))

@app.route('/api/task/get_data')
def get_task_data():
    # Reload data from Excel file before responding
    global task
    task = pd.read_excel('task.xlsx')
    return jsonify(task.to_dict(orient='records'))

@app.route('/api/task/get_name')
def get_task_name():
    # Reload data from Excel file before responding
    global task
    task = pd.read_excel('task.xlsx')
    
    # Assuming you have a Task model and a Task table in your database
    tasks = task[['TaskName', 'Project']].to_dict(orient='records')

    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True)
