/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

window.onload = function () {
    onceLoaded();

};
function onceLoaded() {
    fetch('https://reqres.in/api/users')
            .then(data => data.json())
            .then(users => {
                data = users.data;
                console.log(data);

               
              
                
                  let lista = document.createElement("ul");
                    for (var i = 0; i < data.length; i++) {
                        let elem = document.createElement("li");
                        elem.innerHTML = data[i].email;
                        lista.appendChild(elem);
                    }

                    var body = document.getElementById("main");
                    body.innerHTML = "";
                    body.appendChild(lista);
            }
            )
            .catch((err) => console.error("error:", err));

}