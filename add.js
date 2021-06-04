let pulsCian = document.getElementById("cian");
let pulsGold = document.getElementById("gold");
let pulsViolet = document.getElementById("violet");
let pulsGreen = document.getElementById("green");
let simon = document.getElementById("simon");
let level = document.getElementById("level");
let start = document.getElementById("start");

//Encendidos y Apagados
let cianOn = "background: #00ccff; transform: scale(1.05);";
let cianOff = "background: #00a3cc";
let goldOn = "background: #ffcc00; transform: scale(1.05);";
let goldOff = "background: #cca300";
let violetOn = "background: #a366ff; transform: scale(1.05);";
let violetOff = "background: #6600ff";
let greenOn = "background: #00ff00; transform: scale(1.05);";
let greenOff = "background: #009900";

let nivel;
let secuens;
let indSec;

let audioCian = new Audio ("./sound/cian.mp3");
let audioGold = new Audio ("./sound/gold.mp3");
let audioViolet = new Audio ("./sound/violet.mp3");
let audioGreen = new Audio ("./sound/green.mp3");

start.addEventListener("click", startGame);

function startGame(){
    start.style.cssText = "display: none;";
    
    resetSimon();
    addSecuens();
    playSecuens();

    function resetSimon() {
        nivel = 1;
        secuens = [];
        indSec = 0;
        pulsCian.style.cssText = cianOff;
        pulsGold.style.cssText = goldOff;
        pulsViolet.style.cssText = violetOff;
        pulsGreen.style.cssText = greenOff;
        level.innerText = "Nivel " + nivel;
    }
    function addSecuens(){
        let colors = ["cian", "gold", "violet", "green"];
        secuens.push(colors[numAleat(0,3)]);
    }
    function playSecuens() {
        if (indSec < secuens.length){
            colorOn();
        } else {
            indSec = 0;
            simon.addEventListener("click", testPuls);
        }
        function colorOn() {
            switch(secuens[indSec]){
                case "cian":
                    pulsCian.style.cssText = cianOn;
                    audioCian.play();
                    break;
                case "gold":
                    pulsGold.style.cssText = goldOn;
                    audioGold.play();
                    break;
                case "violet":
                    pulsViolet.style.cssText = violetOn;
                    audioViolet.play();
                    break;
                case "green":
                    pulsGreen.style.cssText = greenOn;
                    audioGreen.play();
                    break;
            }
            setTimeout(colorOff, 700);
        }
        function colorOff() {
            switch(secuens[indSec]){
                case "cian":
                    pulsCian.style.cssText = cianOff;
                    break;
                case "gold":
                    pulsGold.style.cssText = goldOff;
                    break;
                case "violet":
                    pulsViolet.style.cssText = violetOff;
                    break;
                case "green":
                    pulsGreen.style.cssText = greenOff;
                    break;
            }     
            indSec++;
            setTimeout(playSecuens, 300);
        }
        function testPuls(ev) {
            let puls = ev.target;
            
            if (puls.id != "simon") {
                if (puls.id == secuens[indSec]) {
                    pulsOn(puls.id);
                } else {
                    pulsCian.style.cssText = goldOn;
                    pulsGold.style.cssText = goldOn;
                    pulsViolet.style.cssText = goldOn;
                    pulsGreen.style.cssText = goldOn;
                    level.innerHTML = "JAJAJA, Solo llegaste hasta el Nivel " + nivel +".";
                    simon.removeEventListener("click", testPuls);
                    start.style.cssText = "display = block;";
                }
            }
            function pulsOn(puls){
                switch(puls) {
                    case "cian":
                        pulsCian.style.cssText = cianOn;
                        audioCian.play();
                        break;
                    case "gold":
                        pulsGold.style.cssText = goldOn;
                        audioGold.play();
                        break;
                    case "violet":
                        pulsViolet.style.cssText = violetOn;
                        audioViolet.play();
                        break;
                    case "green":
                        pulsGreen.style.cssText = greenOn;
                        audioGreen.play();
                        break;
                }
                setTimeout(pulsOff, 300, puls);
            }
            function pulsOff (puls) {
                switch(puls){
                    case "cian":
                        pulsCian.style.cssText = cianOff;
                        break;
                    case "gold":
                        pulsGold.style.cssText = goldOff;
                        break;
                    case "violet":
                        pulsViolet.style.cssText = violetOff;
                        break;
                    case "green":
                        pulsGreen.style.cssText = greenOff;
                        break;
                }     
                indSec++;
                if (indSec == secuens.length){
                    nivel++;
                    level.innerText = "Nivel " + nivel;
                    addSecuens();
                    indSec = 0;
                    simon.removeEventListener("click", testPuls);
                    setTimeout (playSecuens, 1000);
                }
            }
        }
    }
    function numAleat (x, y){
        return x + Math.floor( Math.random() * (y - x + 1) );
    }
}