import pandas as pd

# Sample data
data = {
    'Employee ID': ['E001', 'E002', 'E003', 'E004', 'E005', 'E006', 'E007', 'E008', 'E009', 'E010',
                    'E011', 'E012', 'E013', 'E014', 'E015', 'E016', 'E017', 'E018', 'E019', 'E020'],
    'Skill 1': ['Programming', 'Design', 'Database', 'Machine Learning', 'Data Science', 'Web Development', 'Graphic Design', 'Cybersecurity', 'Mobile App Dev', 'UX/UI Design',
                'DevOps', 'Cloud Computing', 'Big Data', 'Robotics', 'AI', 'Blockchain', 'Frontend Dev', 'Backend Dev', 'QA Testing', 'Data Engineering'],
    'Skill 2': ['Data Analysis', 'Python', 'JavaScript', 'SQL', 'Java', 'C#', 'Ruby', 'PHP', 'HTML', 'CSS',
                'TypeScript', 'Angular', 'Swift', 'Kotlin', 'Flutter', 'Vue.js', 'React', 'Node.js', 'Redux', 'SASS'],
    'Skill 3': ['Communication', 'Problem Solving', 'Leadership', 'Teamwork', 'Creativity', 'Adaptability', 'Communication', 'Problem Solving', 'Teamwork', 'Creativity',
                'Leadership', 'Adaptability', 'Communication', 'Problem Solving', 'Teamwork', 'Creativity', 'Leadership', 'Adaptability', 'Communication', 'Problem Solving'],
    'Experience 1': [0.7, 0.3, 0.6, 0.9, 0.2, 0.4, 0.8, 0.5, 0.1, 0.7,
                     0.4, 0.9, 0.6, 0.1, 0.8, 0.2, 0.5, 0.1, 0.7, 0.6],
    'Experience 2': [0.4, 0.8, 0.2, 0.1, 0.5, 0.9, 0.3, 0.7, 0.6, 0.2,
                     0.8, 0.3, 0.2, 0.7, 0.5, 0.9, 0.1, 0.8, 0.4, 0.1],
    'Experience 3': [0.9, 0.5, 0.7, 0.4, 0.8, 0.3, 0.6, 0.2, 0.9, 0.5,
                     0.1, 0.6, 0.8, 0.4, 0.3, 0.7, 0.6, 0.1, 0.2, 0.9],
    'Name': ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Sam Wilson', 'Emily Davis', 'Alex Miller', 'Olivia White', 'Liam Turner', 'Ava Young',
             'Ethan Hall', 'Mia Lewis', 'Noah Garcia', 'Sophia Turner', 'Jackson Moore', 'Lily Davis', 'Aiden White', 'Grace Adams', 'James Clark', 'Scarlett Hall']
}

# Creating a DataFrame
df = pd.DataFrame(data)

# Save DataFrame to Excel file
df.to_excel('data.xlsx', index=False)
print(df)
