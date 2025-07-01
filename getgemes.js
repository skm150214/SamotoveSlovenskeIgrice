async function parsejsonshyt(link) {
    console.log(link);
    const slika = await fetch("https://samotovesi.si/igre/" + link + "/slika.png");
    const jsone = await fetch("https://samotovesi.si/igre/" + link + "/info.json");
    if (!jsonResponse.ok) throw new Error("Napaka pri branju info.json");
    const data = await jsone.json();
    const ime = data.ime;
    return [slika, ime];
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
      console.log(game);
        //var retern = parsejsonshyt(game);
        img.src = "https://samotovesi.si/igre/" + game + "/slika.png"
        img.onclick = function () {
        NaIgra(game);
        };
        console.log("https://samotovesi.si/igre/" + game + "/info.json");
        var jsone = fetch("https://samotovesi.si/igre/" + game + "/info.json");
        //if (!jsonResponse.ok) throw new Error("Napaka pri branju info.json");
          const Jsonedata = JSON.parse(jsone);
          const Jsoneime = Jsonedata.ime;
      text.textContent = Jsoneime
      gmenu.appendChild(tempGame);
    });

})
.catch(error => {console.error('Napaka:', error);document.getElementById('output').textContent = "Napaka pri branju games.json";});
