console.log("Test");

alert("18+ content");

document.getElementById("overskrift").innerHTML = "Kim er flink!";


document.getElementById("Lorem").innerHTML="";

let navn = prompt("hva heter du?");
document.getElementById("overskrift") .innerHTML = "hei, " + navn;

let fargevalg = prompt("hva er din favoritt farge (svar på engelsk)");
document.body.style.backgroundColor = fargevalg;
