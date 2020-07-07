function ParserTexto(idarea) {
    httpPost(ep_user, OneJSONString(idarea), function (response) {
        var result = JSON.parse(response);
        if (result.result == true) {
            //confirm("fuimos y venimos");
            document.getElementById('salida1').value = result.contend;
            document.getElementById('salida2').value = result.html;
            addTablevariable(result.variables);
            var html = " <div class='post post-featured'> \n <p>Himalaya parsed me...</p> \n <!-- ...and I liked it. -->\n</div>";
            var json = himalaya.parse(html);
            console.log(json);
            console.log('entre en el if ');
            toastr.success("RESULTADO EXITOSO");
        }
        else {
            //toastr.error("Credenciales Incorrectas","Error al inicio de sesion");
            console.log('este lo que paso con 3 el post 3');
            console.log(result.codigo);
            console.log(result.error);
            console.log(result);
        }
    })
}