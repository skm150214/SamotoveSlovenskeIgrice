import * as THREE from 'three';
import { debug, max } from 'three/tsl';

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
  return (Math.abs(side - main) * Math.abs(side - main)/2) * mult;
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
function doCheckShyt(){
  YsOfKosovThatAreUnderMyGuyFred = [];
  for(let i in Kosi){
    Kosi[i].position.y =  Math.min(6,Math.max(-6,6-myDistance(Kosi[i].position.x+KosiXDol+1,pulseTime/50,TimeToParty)));
    KosiBoxi[i] = new THREE.Box3().setFromObject(Kosi[i]);
    //Kosi[i].position.y = Math.min(6,distance(Kosi[i].position.x,pulseTime/500));
    //if ((doCalcShyt(Kosi[i].position.x,player.position.x,2)) && (doCalcShyt(Kosi[i].position.z,player.position.z,2))){
    //  Kosi[i].material = debug2Material;
    //  //console.log("did shi")
    //}//else{Kosi[i].material = KosMaterial;
    if ((doCalcShyt(Kosi[i].position.x,player.position.x,1)) && (doCalcShyt(Kosi[i].position.z,player.position.z,1))){
      if(DEBUGMODE){Kosi[i].material = debugMaterial;}
      else{Kosi[i].material = KosMaterial;}
      YsOfKosovThatAreUnderMyGuyFred.push(Kosi[i].position.y+5.6); 
      //console.log("did shi")
    }else{Kosi[i].material = KosMaterial;};
    //Kosi[i]

  }
}
function animate() {
  pulseTime+=pulseChng*5;
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
  doCheckShyt();

  if (pressedKeys.has("w")) {
    zGravity -= 0.02;
  }
  if (pressedKeys.has("s")) {
    zGravity += 0.02;
  }
  if (pressedKeys.has("a")) {
    xGravity -= 0.02;
  }
  if (pressedKeys.has("d")) {
    xGravity += 0.02;
  }
  xGravity = Math.max(-0.1, Math.min(0.1, xGravity));
  zGravity = Math.max(-0.1, Math.min(0.1, zGravity));
  player.position.y += gravity/10;
  player.position.x += xGravity*2;
  player.position.z += zGravity*2;
  maxFloorY = Math.max(0,Math.max(...YsOfKosovThatAreUnderMyGuyFred));
  //console.log(maxFloorY);
  if ((player.position.y <Math.max(-1, 0.1 + maxFloorY))) { // thresh been 0.05
    player.position.y = maxFloorY;
    // shyt dont do the gravity shyt
    onGround = true;
    if (pressedKeys.has(" ")) {
      gravity = Math.max(0,gravity) + 1.25;

    }else{gravity = 0;}
  }else{onGround = false;};

  if (!onGround){
    
  
  for (let i in KosiBoxi){
    if (new THREE.Box3().setFromObject(player).intersectsBox(KosiBoxi[i])){
      player.position.z -= zGravity * 2;
      zGravity *= -0.8;
      player.position.x -= xGravity * 2;
      xGravity *= -0.8;
    }}}
  if (zGravity != 0 && xGravity != 0){
  player.rotation.y = Math.atan2(xGravity, zGravity);}
  gravity -= 0.05;
  xGravity *= 0.8;
  zGravity *= 0.8;
  if (PartyDecrease > 0.05){
    PartyFrame = Math.max(0,PartyFrame - (PartyDecrease*200));
    //PartyFrame = 0;
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
  TimeToParty = Math.min(1,Math.min(1,(PartyFrame/1000 - Math.max(0,PartyFrame-2000)) * -10 - (PartyFrame-1000)/100));
  //oldMaxFloorY = maxFloorY;
  //oldY = player.position.y;
  camera.position.y = Math.max(15, (player.position.y - 5)+15);
  renderer.render( scene, camera );

}