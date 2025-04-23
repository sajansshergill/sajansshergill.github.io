// script.js

// Smooth scroll to section by ID
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Load dynamic project details
function loadProject(projectId) {
  const details = document.getElementById("project-details");
  details.style.display = "block";

  let content = "";
  switch(projectId) {
    case 'commission':
      content = `
        <h2>Commission & Contract Data Quality Dashboard</h2>
        <p>Simulate a real-world scenario where you clean and validate messy commission and contract data using Excel and Power BI. Tasks included importing duplicate entries, fixing inconsistencies, recalculating commissions, and designing a Power BI dashboard with slicers, trends, and outlier flags.</p>
      `;
      break;
    case 'workflow':
      content = `
        <h2>Financial Workflow Optimization Using Python</h2>
        <p>Built a Python-based simulation of a financial pipeline (e.g. lead-to-loan), detecting approval delays and automating validation checks. Used pandas for wrangling and seaborn for visual reports.</p>
      `;
      break;
    case 'disparities':
      content = `
        <h2>Exploratory Analysis on Commission Disparities</h2>
        <p>Conducted EDA on commission payouts by role, geography, and department. Used boxplots, histograms, and correlation analysis to uncover outliers and propose standardized policies.</p>
      `;
      break;
    case 'bi-report':
      content = `
        <h2>Ad-Hoc BI Report for Stakeholders</h2>
        <p>Built a one-page executive dashboard using Tableau, highlighting KPIs such as commission vs. quota and top earners by time period. Report featured slicers and downloadable insights in PDF format.</p>
      `;
      break;
    case 'contract-lifecycle':
      content = `
        <h2>Contract Lifecycle Simulation Project</h2>
        <p>Created synthetic data of contract flows from draft to signature. Visualized with Tableau and SQL to pinpoint stage delays, timeline averages, and proposed automated triggers.</p>
      `;
      break;
  }

  details.innerHTML = content;
  details.scrollIntoView({ behavior: "smooth" });
}