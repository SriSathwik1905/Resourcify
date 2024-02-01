# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS from flask_cors module
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in your Flask app

# Assuming data.xlsx is your Excel file
data = pd.read_excel('data.xlsx')

@app.route('/api/get_data')
def get_data():
    return jsonify(data.to_dict(orient='records'))

@app.route('/api/filter_skills')
def filter_skills():
    skill1 = request.args.get('skill1')
    skill2 = request.args.get('skill2')

    filtered_data = data[data[['Skill 1', 'Skill 2', 'Skill 3']].apply(lambda row: skill1 in row.values and skill2 in row.values, axis=1)]

    return jsonify(filtered_data.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
