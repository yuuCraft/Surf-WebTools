const search = document.getElementById("search");

search.addEventListener("input",()=>{
  const q = search.value.toLowerCase();
  const filtered = TOOLS.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.desc.toLowerCase().includes(q)
  );
  renderTools(filtered);
});
