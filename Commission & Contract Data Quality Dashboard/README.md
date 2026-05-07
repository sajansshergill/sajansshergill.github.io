## Commission & Contract Data Quality Dashboard

This case study simulates a financial operations workflow where commission and contract data must be cleaned, validated, and summarized before it can support business decisions.

## Problem Statement

Financial operations datasets often contain quality issues such as missing commission percentages, duplicate contract records, inconsistent date formats, and mismatches between contract values and calculated commissions. This project addresses those issues through structured cleaning, validation, metric calculation, and dashboard design.

## Tools

- Excel for data inspection, formulas, and pivot tables.
- Power BI for dashboard visuals and KPI reporting.
- Python with pandas for optional data wrangling.
- Google Sheets for collaborative review.

## Data Model

- `commission_data.csv`: `agent_id`, `contract_id`, `date`, `amount`, `commission_pct`, `region`, `commission`.
- `contract_data.csv`: `contract_id`, `start_date`, `end_date`, `client_name`, `total_value`.

## Workflow

1. Import and inspect both datasets.
2. Clean missing values, remove duplicates, and standardize date formats.
3. Recalculate commissions with `amount * commission_pct`.
4. Cross-check contract totals across the commission and contract datasets.
5. Calculate total commission by region, average commission percentage, top-performing agents, and monthly trends.
6. Flag records where commission deviates +/-15% from the average.
7. Build Power BI visuals for regional performance, trend analysis, KPI summaries, and validation results.

## Deliverables

- Cleaned workbook or notebook with validation logic.
- Power BI dashboard.
- Written summary explaining data quality issues, remediation steps, and key insights.

