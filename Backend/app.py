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
    # Get skills from query parameters
    skill1 = request.args.get('skill1')
    skill2 = request.args.get('skill2')

    # Check if at least one skill is provided
    if skill1 or skill2:
        # Filter data based on the provided skill(s)
        filtered_data = data[data[['Skill1', 'Skill2', 'Skill3']].apply(lambda row: (not skill1 or skill1 in row.values) and (not skill2 or skill2 in row.values), axis=1)]
        return jsonify(filtered_data.to_dict(orient='records'))
    else:
        # If no skills are provided, return an error message or an appropriate response
        return jsonify({"error": "At least one skill is required for filtering."})


if __name__ == '__main__':
    app.run(debug=True)
