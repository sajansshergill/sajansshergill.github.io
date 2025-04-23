Goal: Simulate a scenario where you clean, validate, and visualize financial commission and contract data using Excel and a BI tool.

Tools: Microsoft Excel, Power BI or Tableau, Python (pandas)

Tasks:

Import messy datasets with duplicate entries, inconsistent dates, or commission outliers.

Clean and validate the dataset using Excel formulas (e.g., VLOOKUP, IFERROR) and Python.

Build a Power BI dashboard showing: commission trends over time, outlier detection, and region-wise earnings.

Add slicers/filters for contract types or teams.

Alignment with JD: Shows your ability to clean and validate contract/commission datasets and build dashboards.


Project: Commission & Contract Data Quality Dashboard
📌 Project Overview:
Create a dashboard that showcases your ability to clean and validate financial data, and communicate insights through visuals using Excel and Power BI.

🧠 Problem Statement:
Commission and contract datasets often have inconsistencies like duplicate entries, mismatched totals, and missing values. This project focuses on simulating a dataset, cleaning it, validating key fields, and building an interactive dashboard to summarize key metrics.

🔧 Tools & Technologies:
Excel (Advanced Formulas, Pivot Tables)

Power BI or Tableau (for dashboard)

Python (optional) for deeper data wrangling

Google Sheets (alternative)

📊 Data Source:
Use synthetic data. I'll generate a CSV file for:

commission_data.csv (agent_id, contract_id, date, amount, commission_pct, region)

contract_data.csv (contract_id, start_date, end_date, client_name, total_value)

Would you like me to generate this dataset for you?

🧪 Steps to Execute:
Import Data into Excel or Python and inspect for issues.

Clean Data:

Handle missing commission_pct or contract_id

Remove duplicates

Fix date format issues

Validate Data:

Recalculate commissions using amount * commission_pct

Match contract values across datasets

Summarize Key Metrics:

Total commission earned by region

Average commission percentage

Top-performing agents

Monthly/quarterly trends

Build Dashboard:

Filters: Date, Region

Charts: Bar for total commission, line for trends, pie for region-wise split

Add Anomaly Indicators:

Show flags where commissions deviate >15% from average

📈 Visualizations:
Total Commission by Region (Bar Chart)

Commission Over Time (Line Chart)

Contract Validations Summary Table

KPI Cards: Total Contracts, Avg. Commission %

📝 Final Deliverables:
Jupyter Notebook or Excel sheet with cleaning + validation logic

Power BI or Tableau dashboard

Write-up (Markdown or HTML):

Summary of problem

Data cleaning steps

Key findings

Dashboard walkthrough

