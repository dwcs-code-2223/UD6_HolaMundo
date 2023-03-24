/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

$(document).ready(function () {
    console.log("document loaded");
});

$(window).on("load", function () {
    console.log("window loaded");
    onceLoaded();


});

function onceLoaded() {
    console.log('La página ha terminado de cargarse!!');
    $("#greetButton").click(greetMe);
}

function greetMe() {
    let nombre = $("#nombre");

    alert('¡Hola, ' + nombre.val() + '!');
}



