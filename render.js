const list = document.getElementById("tool-list");

function renderTools(tools){
  list.innerHTML = "";
  for(const t of tools){
    const div = document.createElement("a");
    div.href = t.path;
    div.className = "tool-card";
    div.innerHTML = `
      <h4>${t.name}</h4>
      <p>${t.desc}</p>
    `;
    list.appendChild(div);
  }
}

renderTools(TOOLS);
