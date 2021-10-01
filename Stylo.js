var operatinga;
var operatingb;
var operating;
borrar();

function init() {

    var result = document.getElementById('result');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
}
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var cero = document.getElementById('cero');
var historial = document.getElementById('historial');
}
one.onclick = function(e) {
    result.textContent = result.textContent + "1";
}
two.onclick = function(e) {
    result.textContent = result.textContent + "2";
}
three.onclick = function(e) {
    result.textContent = result.textContent + "3";
}
four.onclick = function(e) {
    result.textContent = result.textContent + "4";
}
five.onclick = function(e) {
    result.textContent = result.textContent + "5";
}
six.onclick = function(e) {
    result.textContent = result.textContent + "6";
}
seven.onclick = function(e) {
    result.textContent = result.textContent + "7";
}
eight.onclick = function(e) {
    result.textContent = result.textContent + "8";
}
nine.onclick = function(e) {
    result.textContent = result.textContent + "9";
}
cero.onclick = function(e) {
    result.textContent = result.textContent + "0";
}
reset.onclick = function(e) {
    resetear();
}
suma.onclick = function(e) {
    operatinga = result.textContent;
    operating = "+";
    limpiar();
}
resta.onclick = function(e) {
    operatinga = result.textContent;
    operating = "-";
    limpiar();
}
multiplicacion.onclick = function(e) {
    operatinga = result.textContent;
    operating = "*";
    limpiar();
}
division.onclick = function(e) {
    operatinga = result.textContent;
    operating = "/";
    limpiar();
}
igual.onclick = function(e) {
    operatingb = result.textContent;
    resolver();
}
historial.onclick = function(e) {
    mostrar();
}

function limpiar() {
    result.textContent = "";
}

function resetear() {
    result.textContent = "";
    operatinga = 0;
    operatingb = 0;
    operating = "";
}

function resolver() {
    var res = 0;
    switch (operating) {
        case "+":
            res = parseFloat(operatinga) + parseFloat(operatingb);
            break;
        case "-":
            res = parseFloat(operatinga) - parseFloat(operatingb);
            break;
        case "*":
            res = parseFloat(operatinga) * parseFloat(operatingb);
            break;
        case "/":
            res = parseFloat(operatinga) / parseFloat(operatingb);
            break;
    }
    save(res, operating);
    resetear();
    result.textContent = res;
}

function save(res) {
    var array = [operatinga, operating, operatingb, res]
    localStorage.setItem("Calculo", JSON.stringify(array));
}

function mostrar() {
    var view = localStorage.getItem("Calculo");
    var view1 = view[2];
    var view2 = view[6];
    var view3 = view[10];
    var space = "=";
    var view4 = view[13];
    alert("Ultima Operacion: " + view1 + view2 + view3 + space + view4);
}

function borrar() {
    localStorage.clear();
}