// script.js

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  
  function loadProject(projectId) {
    const details = document.getElementById("project-details");
    details.style.display = "block";
  
    let content = "";
  
    switch(projectId) {
      case 'commission':
        content = `<h2>Commission & Contract Data Quality Dashboard</h2>
          <p>Simulate a real-world scenario where you clean and validate messy commission and contract data using Excel and Power BI...</p>`;
        break;
      case 'workflow':
        content = `<h2>Financial Workflow Optimization Using Python</h2>
          <p>Automate financial workflows and detect anomalies in validation using Python...</p>`;
        break;
      case 'disparities':
        content = `<h2>Exploratory Analysis on Commission Disparities</h2>
          <p>Explore disparities across teams, departments, or geographies using data analysis techniques...</p>`;
        break;
      case 'bi-report':
        content = `<h2>Ad-Hoc BI Report for Stakeholders</h2>
          <p>Build a dashboard with KPIs, filters, and downloadable summaries...</p>`;
        break;
      case 'contract-lifecycle':
        content = `<h2>Contract Lifecycle Simulation Project</h2>
          <p>Visualize the flow of contracts from initiation to closure, highlighting bottlenecks...</p>`;
        break;
    }
  
    details.innerHTML = content;
    details.scrollIntoView({ behavior: "smooth" });
  }
  