$(window).on("load", function () {
    onceLoaded();
});

function onceLoaded() {

    var dataEnviar = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    $.ajax({
        // la URL para la petición
        url: 'https://jsonplaceholder.typicode.com/posts',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)


        // especifica si será una petición POST o GET
        type: 'POST',

        // el tipo de información que se espera de respuesta
        dataType: 'json',
        data: dataEnviar
        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
    }).done(function (data) {
        console.log("Ha llegado la respuesta del servidor: " + JSON.stringify(data));


//
//        let lista = document.createElement("ul");
//        for (var i = 0; i < data.length; i++) {
//            let elem = document.createElement("li");
//            elem.innerHTML = data[i].name;
//            lista.appendChild(elem);
//        }
//
//        var body = document.getElementById("main");
//        body.innerHTML = "";
//        body.appendChild(lista);

//     $( "<h1>" ).text( json.title ).appendTo( "body" );
//     $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
    })
            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            .fail(function (xhr, status, errorThrown) {
                alert("Sorry, there was a problem!");
                console.log("Error: " + errorThrown);
                console.log("Status: " + status);
                console.dir(xhr);
            })
            // Code to run regardless of success or failure;
            .always(function (xhr, status) {
                console.log("The request is complete!");
            });
            
           
}

