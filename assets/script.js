// script.js

// Smooth scroll to section by ID
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Load dynamic project details or additional section content
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
    case 'background':
      content = `
        <h2>Background</h2>
        <p>I started my journey in technology through a solid foundation in computer science and quality assurance. With a Master’s in Computer Science and current enrollment in a Master’s in Data Science program at Pace University, I’ve developed a strong academic base in programming, statistics, and databases. Over the years, I’ve applied my knowledge in the fintech and edtech sectors, enhancing product reliability and automating QA workflows. This technical background supports my transition into advanced analytics, where I leverage statistical models and business intelligence to solve real-world problems.</p>
      `;
      break;
    case 'portfolio':
      content = `
        <h2>Portfolio</h2>
        <p>My portfolio features a range of projects that combine data wrangling, statistical modeling, and dashboard design. From customer churn prediction using machine learning to energy forecasting with Facebook Prophet, each project demonstrates a specific problem-solving skill. You can explore my repositories on GitHub, view dashboard screenshots, and download case study summaries below:</p>
        <ul>
          <li><a href="#projects">View All Projects</a></li>
          <li><a href="https://github.com/sajansshergill" target="_blank">Visit GitHub Portfolio</a></li>
        </ul>
      `;
      break;
  }

  details.innerHTML = content;
  details.scrollIntoView({ behavior: "smooth" });
}
