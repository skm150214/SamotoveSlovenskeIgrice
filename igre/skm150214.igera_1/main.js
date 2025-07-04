import { THREE, CSS2DRenderer, CSS2DObject, confetti } from './dependency.js';
import * as ssiutils from '../utils.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(1, 2, 4);
scene.add(light);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
// text stuff

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild(labelRenderer.domElement);
const div = document.createElement('div');
div.style.whiteSpace = 'pre';
div.textContent = 'Zgubili ste!\nsssss';
div.style.color = 'white';
div.style.fontSize = '20px';
div.style.textAlign = 'center';
var reseneTocke = 0;

const label = new CSS2DObject(div);
label.position.set(0, 60, 0);
//label.rotation.x = 34
//label.rotation.y = 34
//label.rotation.z = 34
scene.add(label);
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xbe6060 } );
const player = new THREE.Mesh( geometry, material );
const groundGeometry =  new THREE.PlaneGeometry( 1500, 1100, 1 );
const groundMaterial = new THREE.MeshBasicMaterial( { color: 0x808080 } );
const ground = new THREE.Mesh( groundGeometry, groundMaterial );
const KosGeometry = new THREE.BoxGeometry( 2, 10, 2 );
const KosMaterial = new THREE.MeshBasicMaterial( { color: 0x2c2c2c } );
const Kos = new THREE.Mesh( KosGeometry, KosMaterial );
const debugMaterial = new THREE.MeshBasicMaterial( { color: 0xdc3030 } );
const debug2Material = new THREE.MeshBasicMaterial( { color: 0xa94f4f } );
var DEBUGMODE = false;
var Kosi = [];
// tuki mamo ves kosi shyt
const KosiXDol = 26;
const KosiZDol = 24;

for (let g = 0; g < KosiXDol; g++){
  for (let h = 0; h < KosiZDol; h++){
    Kos.position.x = (g * 2) - (KosiXDol -1);
    Kos.position.z = (h * -2) + 1;
    Kos.position.y = -6 + (g%3);
    Kosi.push(Kos.clone());
    scene.add(Kosi[Kosi.length-1]);
    //Kosi[h+g*2].position.x = g;
    //Kosi[h+g*2].position.z = h;
    //Kosi[h+g*2].position.y = 5;
    //console.log("Kosi");
    //console.log(Kosi);
    //console.log(h);
    //console.log(g);
  }
}
//for (let i in Kosi){
//  Kosi[i].position.x = i*3;
//
//  console.log("dodalo" + i);
//
//}

//for (let i in Kosi){
//  Kosi[i].position.x = -i
//  console.log(Kosi[i].position.x);
//  console.log(i);
//  console.log(Kosi[i]);
//}
//for (let i in Kosi){
//}
//Kosi[0].position.z = -1;
//Kosi[2].position.x = -3;

scene.add( player );
scene.add( ground );
ground.rotation.x = -Math.PI/2;
ground.position.y = -2;
var pressedKeys = new Set();
var onGround = false;
camera.position.z = 7.5;
//camera.position.x = -4;
//camera.rotation.y = -0.5;
//camera.rotation.y = Math.PI/2;

var gravity = 0.0;
player.position.y = 10;
camera.position.y = 15; //10
camera.rotation.x = -0.75; //0.75
camera.position.z = 10;
var xGravity = 0;
var zGravity = 0;
//camera.position.x = -4;

Kos.position.x = 1;
Kos.position.z = 0;
Kos.position.y = 5;
//Kosi[0].position.y = -7;
var pulseTime = 0;
var pulseChng = 1;
//console.log("Kosi");
//console.log(Kosi);
var pulseMaterial = new THREE.MeshBasicMaterial( { color: 0xf30000 } );
const playerBox = new THREE.Box3().setFromObject(player);
var KosiBoxi = [];
//Kosi[10].material = debugMaterial;
function updateKosiBoxi(){
for (let i in Kosi){
  KosiBoxi.push(new THREE.Box3().setFromObject(Kosi[i]));
}}
function doTheRedColorShyt() {
  pulseTime = 0;
  console.log(pulseTime);
  console.log(((243*(pulseTime/1000))*65536));

}
function moveTheBlocks() {
  switch (Math.random()%4) {
    case 0:

      break;
  };
}
function myDistance(main,side,mult){
  return (Math.abs(side - main) * Math.abs(side - main)/4) * mult;
}
function doCalcShyt(a,mainA,dist){
  //return (Math.abs(a - mainA) < 1) || (Math.abs(a - (Math.ceil(mainA-1)-1)) < 1)  || (Math.abs(a - (Math.floor(mainA+1)+1)) < 1);
  return (Math.abs(a - mainA) < 1) || (Math.abs(a - (mainA+(dist/2))) < dist)  || (Math.abs(a - (mainA+(dist/2))) < dist) || (Math.abs(a - mainA) < 1) || (Math.abs(a - (mainA-(dist/2))) < dist)  || (Math.abs(a - (mainA-(dist/2))) < dist);
}
var YsOfKosovThatAreUnderMyGuyFred = [];
var maxFloorY = -6.0;
//var oldMaxFloorY = -6.0;
//var oldY = 15.0;
var TimeToParty = 0;
var TimeToPartyAdd = 0;
var PartyFrame = 0;
var PartyFrameMult = 1;
var  PartyDecrease = 0;
var startRedIntrv = false;
var TheseRedKosi = [];
var ThisRedId = 0;
var KosiIdsThatAreUnderMyGuyFred = [];
var Died = false;
var RdeciStage = 0;
var moveType = 1;
function doCheckShyt(){
  KosiIdsThatAreUnderMyGuyFred = [];
  YsOfKosovThatAreUnderMyGuyFred = [];
  for(let i in Kosi){
    switch(moveType){
    case 0:Kosi[i].position.y =  Math.min(6,Math.max(-6,6-myDistance(Kosi[i].position.x+KosiXDol+1,pulseTime/50,TimeToParty)));break;
    case 1:Kosi[i].position.y =  Math.min(6,Math.max(-6,6-myDistance(-Kosi[i].position.z+1,pulseTime/50,TimeToParty)));break;
    case 2:Kosi[i].position.y =  Math.min(6,Math.max(-6,6-myDistance((Kosi[i].position.x+KosiXDol+1) + (-Kosi[i].position.z+1),pulseTime/50,TimeToParty)));break;
    case 3:Kosi[i].position.y =  Math.min(6,Math.max(-6,6-myDistance(-(Kosi[i].position.x+KosiXDol+1) + (-Kosi[i].position.z+1),pulseTime/50,TimeToParty)));break;
    case 4:Kosi[i].position.y =  Math.min(6,Math.max(-6,6-myDistance((Kosi[i].position.x+KosiXDol+1) + -(-Kosi[i].position.z+1),pulseTime/50,TimeToParty)));break;
    case 5:Kosi[i].position.y =  Math.min(6,Math.max(-6,6-myDistance(-(Kosi[i].position.x+KosiXDol+1) + -(-Kosi[i].position.z+1),pulseTime/50,TimeToParty)));break;
  }
    KosiBoxi[i] = new THREE.Box3().setFromObject(Kosi[i]);
    //Kosi[i].position.y = Math.min(6,distance(Kosi[i].position.x,pulseTime/500));
    //if ((doCalcShyt(Kosi[i].position.x,player.position.x,2)) && (doCalcShyt(Kosi[i].position.z,player.position.z,2))){
    //  Kosi[i].material = debug2Material;
    //  //console.log("did shi")
    //}//else{Kosi[i].material = KosMaterial;
    if ((doCalcShyt(Kosi[i].position.x,player.position.x,1)) && (doCalcShyt(Kosi[i].position.z,player.position.z,1))){
      KosiIdsThatAreUnderMyGuyFred.push(i);  
      if(DEBUGMODE){Kosi[i].material = debugMaterial;}
      else{//Kosi[i].material = KosMaterial;
        
      }
      YsOfKosovThatAreUnderMyGuyFred.push(Kosi[i].position.y+5.6); 
      //console.log("did shi")
    }else{//Kosi[i].material = KosMaterial;

    };
    //Kosi[i]

  }
}
function doThePulseShyt(flaf,onlyDoTheChange){
  if (onlyDoTheChange){
    for (let i in TheseRedKosi){
      Kosi[TheseRedKosi[i]].material = pulseMaterial;
    }
  }else{
  TheseRedKosi = [];
  //Math.random();
  for (let i in Kosi){
    Kosi[i].material = KosMaterial;
  }
  for (let i = 0; i <flaf; i++){
    ThisRedId = Math.floor(Math.random() * Kosi.length);
    TheseRedKosi.push(ThisRedId);
    Kosi[ThisRedId].material = pulseMaterial;
    //console.log("laalla");
  }
  }
}
//doThePulseShyt(10);
var bigPlayer = player;
function getKosovIdByFredsPos(){
  return (Math.floor(player.position.x) + KosiXDol) + (KosiXDol/2 * (-Math.floor(player.position.z)));
}
function restartVars(){

var YsOfKosovThatAreUnderMyGuyFred = [];
var maxFloorY = -6.0;
//var oldMaxFloorY = -6.0;
//var oldY = 15.0;
var TimeToParty = 0;
var TimeToPartyAdd = 0;
var PartyFrame = 0;
var PartyFrameMult = 1;
var  PartyDecrease = 0;
var startRedIntrv = false;
var TheseRedKosi = [];
var ThisRedId = 0;
var KosiIdsThatAreUnderMyGuyFred = [];
var Died = false;
var RdeciStage = 0;
var moveType = 1;
ground.rotation.x = -Math.PI/2;
ground.position.y = -2;
var pressedKeys = new Set();
var onGround = false;
camera.position.z = 7.5;
//camera.position.x = -4;
//camera.rotation.y = -0.5;
//camera.rotation.y = Math.PI/2;

var gravity = 0.0;
player.position.y = 10;
camera.position.y = 15; //10
camera.rotation.x = -0.75; //0.75
camera.position.z = 10;
var xGravity = 0;
var zGravity = 0;
//camera.position.x = -4;

Kos.position.x = 1;
Kos.position.z = 0;
Kos.position.y = 5;
//Kosi[0].position.y = -7;
var pulseTime = 0;
var pulseChng = 1;
//console.log("Kosi");
//console.log(Kosi);
var pulseMaterial = new THREE.MeshBasicMaterial( { color: 0xf30000 } );
const playerBox = new THREE.Box3().setFromObject(player);
var KosiBoxi = [];
}
let timeout1;
let timeout2;
let timeout3;
var alreadyOnTheTopWhileDied = false;
function doRandomMove(){
  xGravity += (Math.floor(Math.random() * 2)-1) * 3; 
  zGravity += (Math.floor(Math.random() * 2)-1) * 3; 
}
function animate() {
  pulseTime+=pulseChng*10 + (reseneTocke * (1-(1/reseneTocke)));
  if (pulseTime >= (100*KosiXDol)){
    pulseChng = -1;
    //console.log(pulseChng);
  }
  if (pulseTime <= 0){
    pulseChng = 1;
    //console.log(pulseChng);
  }
  //pulseMaterial = new THREE.MeshBasicMaterial( { color: ((243*(pulseTime/1000))) } );
  //Kosi[0].material = pulseMaterial;
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
  TimeToParty = Math.min(1,Math.min(1,(PartyFrame/1000 - Math.max(0,PartyFrame-2000)) * -10 - (PartyFrame-1000)/100));
  doCheckShyt();

  if (pressedKeys.has("w") || pressedKeys.has("W") || pressedKeys.has("ArrowUp")) {
    zGravity -= 0.02;
  }
  if (pressedKeys.has("s") || pressedKeys.has("S") || pressedKeys.has("ArrowDown")) {
    zGravity += 0.02;
  }
  if (pressedKeys.has("a") || pressedKeys.has("A") || pressedKeys.has("ArrowLeft")) {
    xGravity -= 0.02;
  }
  if (pressedKeys.has("d") || pressedKeys.has("D") || pressedKeys.has("ArrowRight")) {
    xGravity += 0.02;
  }
  xGravity = Math.max(-0.1, Math.min(0.1, xGravity));
  zGravity = Math.max(-0.1, Math.min(0.1, zGravity));
  player.position.y += gravity/10;
  player.position.x += xGravity*2;
  player.position.z += zGravity*2;
  //console.log(player.position.x);
  //console.log(player.position.z);
  if (player.position.x < -25){player.position.x = -25;}
  if (player.position.x > 25){player.position.x = 25;}
  if (player.position.z > 2){player.position.z = 2;}
  if (player.position.z < -44){player.position.z = -44;}
  maxFloorY = Math.max(0,Math.max(...YsOfKosovThatAreUnderMyGuyFred));
  //console.log(maxFloorY);
  if ((player.position.y <Math.max(-1, 0.1 + maxFloorY))) { // thresh been 0.05
    player.position.y = maxFloorY;
    // shyt dont do the gravity shyt
    onGround = true;
    if (pressedKeys.has(" ")) {
      gravity = Math.max(0,gravity) + 1.25;
    }else{gravity = 0;}
    if(RdeciStage == 2){for (let i in KosiIdsThatAreUnderMyGuyFred){if(TheseRedKosi.includes(parseInt(KosiIdsThatAreUnderMyGuyFred[i]))){Died = true;}}}
    

  }else{onGround = false;};
  //if(TheseRedKosi.includes(getKosovIdByFredsPos())){Died = true;};
  //console.log(getKosovIdByFredsPos());
  //console.log("hat was x")
  if (!onGround){
    
  //bigPlayer = player.clone();
  //bigPlayer.geometry = new THREE.BoxGeometry( 1.05, 10.5, 1.05 );
  //bigPlayer.position.x -= 0.025;
  //bigPlayer.position.z -= 0.025;
  //bigPlayer.position.y -= 0.6;

  for (let i in KosiBoxi){
    //if ((TheseRedKosi.includes(i))&&(new THREE.Box3().setFromObject(player).intersectsBox(KosiBoxi[i]))){Died = true;}
    if (new THREE.Box3().setFromObject(player).intersectsBox(KosiBoxi[i])){
      player.position.y -= gravity * 2;
      gravity *= -0.8;
      player.position.z -= zGravity * 2;
      zGravity *= -0.8;
      player.position.x -= xGravity * 2;
      xGravity *= -0.8;
      //if (TheseRedKosi.includes(getKosovIdByFredsPos())){
      //  Died = true;
      //  console.log("died");
      //}
    }}}
  //console.log(KosiIdsThatAreUnderMyGuyFred);
  //console.log(TheseRedKosi.includes(KosiIdsThatAreUnderMyGuyFred[0]));
  //console.log(TheseRedKosi);

  if (zGravity != 0 && xGravity != 0){
  player.rotation.y = Math.atan2(xGravity, zGravity);}
  gravity -= 0.05;
  xGravity *= 0.8;
  zGravity *= 0.8;
  if (PartyDecrease > 0.05){
    //PartyFrame = Math.max(0,PartyFrame - (PartyDecrease*200));
    PartyFrame = 0;
  }else if (PartyDecrease < 0.000){PartyFrame = 0;}else{
  PartyFrame += 1;}
  PartyDecrease *= 0.95;
  if (PartyDecrease < 0.025){
    PartyDecrease = 0;
  }
  //console.log(PartyDecrease);
  //console.log(Math.max(0,(PartyFrame*PartyFrame)/10 -50));
  //console.log( Math.sqrt(myDistance(PartyFrame,5000,1)));
  //console.log((Math.max(0,PartyFrame-50)/100));
  //console.log(-10 - Math.min(1,(PartyFrame-1000)/100));
  //TimeToParty = Math.min(1,(PartyFrame/1000 - Math.max(0,PartyFrame-2000)) * -10 - Math.min(1,(PartyFrame-1000)/100));

  //oldMaxFloorY = maxFloorY;
  //oldY = player.position.y;
  camera.position.y = Math.max(15, (player.position.y - 5)+15);

  player.position.y += Died * 2;
  //if (RdeciStage == 0){pulseMaterial = new THREE.MeshBasicMaterial( { color: 0x31eb7b } );}
  //if (RdeciStage == 1){pulseMaterial = new THREE.MeshBasicMaterial( { color: 0xe2873d } );}
  //if (RdeciStage == 2){pulseMaterial = new THREE.MeshBasicMaterial( { color: 0xf30000 } );}
  //Kosi[100].material = debugMaterial;
  //console.log(RdeciStage);
  if (camera.position.y >= 60){
    camera.position.y = 60;
    camera.rotation.x = -0.75;
    if(!alreadyOnTheTopWhileDied){confetti();alreadyOnTheTopWhileDied = true;};
  }
  if (player.position.y >= 50){
    gravity = 0;
  }
  //console.log(camera.rotation.z);
  if (player.position.y >= 50){
    camera.lookAt(0,Math.min(60,player.position.y),0);

    //if (camera.rotation.y > 0){
    //  camera.rotation.y = 0;};
    Died = true;
  }
  if(Died){clearInterval(moveInterval);};
  renderer.render( scene, camera );
  labelRenderer.render(scene, camera);
}
function doTheCoolMovingShyt(){

  div.textContent = 'Zgubili ste!\n Točke: ' + reseneTocke + "\nKliknite G da igraste še enkrat!";
  //TimeToParty = 0;
  //TimeToPartyAdd = 0.1;
  PartyDecrease =1;


  timeout1 = setTimeout(() => {

    RdeciStage = 0;
    pulseMaterial = new THREE.MeshBasicMaterial( { color: 0x31eb7b } );
    doThePulseShyt(70,false);
    moveType = Math.floor(Math.random() * 5);
  }, 12000);
  timeout2 = setTimeout(() => {

    RdeciStage = 1;
    pulseMaterial = new THREE.MeshBasicMaterial( { color: 0xe2873d } );
    doThePulseShyt(1,true);
  }, 13000);
  timeout3 = setTimeout(() => {

    RdeciStage = 2;
    pulseMaterial = new THREE.MeshBasicMaterial( { color: 0xf30000 } );
    doThePulseShyt(1,true);
  }, 14000);
  if(!Died){reseneTocke += 1;}
}
// ts pmo icl :skull:
function onKeyDown( event ) {
  if (!event.repeat) {
    //console.log(pressedKeys);
    pressedKeys.add(event.key);
    if (event.key == "F4") {
      DEBUGMODE = !DEBUGMODE;
      console.log(DEBUGMODE);
      console.log(pressedKeys);
    }
    if ((event.key == "g" || event.key == "G") && Died){
      ssiutils.reload();
      //restartVars();
      //Died = false;
      //TheseRedKosi = [];
      //doThePulseShyt(0,true);
      //clearTimeout(timeout1);
      //clearTimeout(timeout2);
      //clearTimeout(timeout3);
      //doTheCoolMovingShyt();
      //setInterval(moveInterval);
      //RdeciStage = 0;
      //pulseMaterial = new THREE.MeshBasicMaterial( { color: 0x31eb7b } );
      //doThePulseShyt(70,false);
      //moveType = Math.floor(Math.random() * 5);
    }
  }
}
function onKeyUp( event ) {
  //console.log(pressedKeys);
  pressedKeys.delete(event.key);
  //console.log(pressedKeys);
}
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
doTheCoolMovingShyt();
//doThePulseShyt();
const moveInterval = setInterval(doTheCoolMovingShyt, 15000);
const randMoveInterval = setInterval(doRandomMove, 1000);
//setTimeout(() => {
//  console.log('did the prewaiting stuff');
//  startRedIntrv = true;
//}, 12000);

//console.log('did the prewaiting stuff 2 ');

//doThePulseShyt();
//doTheRedColorShyt();
//moveTheBlocks();
