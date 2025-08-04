function funnyImeGen(ime){
    const pre = ["Kul", "Kocka", "Epik", "Super", "Mega", "Ultra"];
    const suf = ["Profi", "YOLO", "Gurt", "Hecker", "Ninja", "Pica", "Bomba", "Zmaj", "Banana", "Torta"];
    const randomPre = pre[Math.floor(Math.random() * pre.length)];
    const randomSuf = suf[Math.floor(Math.random() * suf.length)];
    let end = randomPre;
    let rand = Math.floor(Math.random()/0.99999 * 3);
    if (rand === 0) {end += "-";}
    if (rand === 1) {end += "_";}
    if (rand === 2) {end += "";}
    rand = Math.floor(Math.random()/0.99999 * 3);
    end += ime;
    if (rand === 0) {end += "-";}
    if (rand === 1) {end += "_";}
    if (rand === 2) {end += "";}
    end += randomSuf;
    end += Math.floor(Math.random() * 999);
    return end;
}