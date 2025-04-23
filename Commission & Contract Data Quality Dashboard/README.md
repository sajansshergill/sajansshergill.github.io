## 💼 Commission & Contract Data Quality Dashboard

### 📌 Project Overview
This project simulates a real-world scenario where financial commission and contract data often contains 
inconsistencies such as duplicates, missing values, or misaligned entries. The goal is to clean, validate, 
and visualize this data using Excel, Power BI, and optionally Python, to showcase analytical rigor and 
dashboarding capability.

### 🧠 Problem Statement
Financial operations teams often deal with messy datasets, including:

- Missing commission percentages

- Duplicate contract records

- Inconsistent date formats

- Mismatches between contract amounts and calculated commissions

This project addresses those issues by applying cleaning and validation techniques, followed by the 
creation of a dashboard that highlights key trends, outliers, and insights to support strategic decisions.

### 🔧 Tools & Technologies
Excel (Advanced formulas, Pivot Tables)

Power BI (or Tableau for interactive dashboarding)

Python (pandas) – Optional for advanced data wrangling

Google Sheets – Optional for collaborative editing

📊 Data Source
Synthetic data was generated for this project:

commission_data.csv
Fields: agent_id, contract_id, date, amount, commission_pct, region, commission

contract_data.csv
Fields: contract_id, start_date, end_date, client_name, total_value

🧪 Steps to Execute
1. Data Import
Load both datasets into Excel or a Python environment.

Inspect for issues such as missing or incorrect values.

2. Data Cleaning
Handle missing values in commission_pct, contract_id

Remove duplicate rows

Standardize date formats for consistency

3. Data Validation
Recalculate commissions using: amount × commission_pct

Cross-verify contract totals between both datasets

4. Metric Calculation
Total commission earned per region

Average commission percentage across contracts

Identify top-performing agents

Detect monthly/quarterly earning trends

5. Dashboard Development
Use Power BI or Tableau to create:

Filters: By Date and Region

Charts:

Bar chart: Total commission by region

Line chart: Monthly commission trends

Pie chart: Commission distribution by region

Summary table for contract validations

6. Anomaly Detection
Highlight records where commission deviates ±15% from average

📈 Visualizations
📊 Bar Chart: Total Commission by Region

📉 Line Chart: Commission Over Time

📋 Table: Contract Validation Summary

🧮 KPI Cards: Total Contracts, Avg. Commission %

📝 Final Deliverables
✅ Jupyter Notebook or Excel workbook (Data cleaning, validation logic)

✅ Power BI / Tableau Dashboard

✅ Write-Up (README.md):

Introduction & Problem Statement

Tools Used

Data Cleaning & Validation Strategy

Key Insights & Metrics

Dashboard Screenshots & Interpretation

🔗 Alignment with Internship Role
This project demonstrates:

Ability to clean and validate contract/commission datasets

Proficiency with BI tools and Excel

Skills in exploratory data analysis

Communication of insights through interactive dashboards

