function parsejsonshyt(link){
    const slika = fetch("https://samotovesi.si/igre/" + link + "/slika.png")
    const json = fetch("https://samotovesi.si/igre/" + link + "/info.json")
      .then(response => {
if (!response.ok) throw new Error("Failed to load games.json");return response.json();})
.then(data => {
    const ime = data.ime
    return (slika, ime);
})

}
const gmenu = document.getElementById("igremenu");
fetch("https://samotovesi.si/igre/games.json")
      .then(response => {
if (!response.ok) throw new Error("Failed to load games.json");return response.json();})
.then(data => {
    //console.log('Prebrani podatki:', data);
    const games = data.games;

    const tempGame = document.createElement("div");
    tempGame.className = "slika-wrapper";
    const img = document.createElement("img");
    img.src = "obama.jpg";
    img.alt = "aaa";
    img.className = "slika";
    img.draggable = false;
    const text = document.createElement("a");
    text.textContent = "Igra";
    //img.onclick = function () {
    //    NaIgra();
    //};
    tempGame.appendChild(img);
    tempGame.appendChild(text);
    games.forEach(game => {
        var retern = parsejsonshyt(game);
        img.src = retern[0];
        img.onclick = function () {
        NaIgra(game);
        };
      text.textContent = retern[1];
      gmenu.appendChild(tempGame);
    });

})
.catch(error => {console.error('Napaka:', error);document.getElementById('output').textContent = "Napaka pri branju games.json";});
