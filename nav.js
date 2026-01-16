document.getElementById("header").textContent = "Web Toolbox";

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = `
<h3>Tools</h3>
${TOOLS.map(t=>`<a href="${t.path}">${t.name}</a>`).join("")}
`;
