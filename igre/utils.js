export function reload() {
  const id = "igra";
  const oldScript = document.getElementById(id);
  if (oldScript) oldScript.remove();

  const newScript = document.createElement("script");
  newScript.id = id;
  //newScript.src = "main.js?t=" + new Date().getTime(); // parametri preprečijo cache
  document.body.appendChild(newScript);
}

// Pokliči, kadar želiš reloadati main.js
//reloadMainJS();