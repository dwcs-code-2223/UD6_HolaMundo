/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
window.addEventListener('load', function () {
    console.log('La página ha terminado de cargarse!!');

    doGet();
});

function doGet() {
    var peticion_http = new XMLHttpRequest();
    peticion_http.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                alert(this.response);
                //document.getElementById("")



                let data = JSON.parse(this.response);
              
                if (data.length > 0) {
                    let lista = document.createElement("ul");
                    for (var i = 0; i < data.length; i++) {
                        let elem = document.createElement("li");
                        elem.innerHTML = data[i].name;
                        lista.appendChild(elem);
                    }

                    var body = document.getElementById("main");
                    body.innerHTML = "";
                    body.appendChild(lista);
                } else {

                    body.innerHTML = "<p> No hay resultados </p>";
                }
            }
        } else {
            console.log("readyState: " + this.readyState);
        }
    };
    let url = 'https://jsonplaceholder.typicode.com/users';
    console.log(url);
    peticion_http.open('GET', url);
    peticion_http.send();
}


