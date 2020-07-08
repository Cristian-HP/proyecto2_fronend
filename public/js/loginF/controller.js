function ParserTexto(idarea) {
    httpPost(ep_user, OneJSONString(idarea), function (response) {
        var result = JSON.parse(response);
        if (result.result == true) {
            toastr.success("RESULTADO EXITOSO");
            //confirm("fuimos y venimos");
            document.getElementById('salida1').value = result.contend;
            document.getElementById('salida2').value = result.html;
            addTablevariable(result.variables);
            var html = result.html;
            var json = himalaya.parse(html);
            document.getElementById('salida3').value = JSON.stringify(json, null, 2);
            document.getElementById('salida4').value = result.traducido;

            los_errores(result.error);
            
        }
        else {
            toastr.error("Se detectaron ERRORES EN EL ARchivo");
            los_errores(result.error);
            toastr.error("A Ocurrido un error favor resivar la entrada");
        }
    })
}

function los_errores(Nerrores){
    //Eliminamos contenido si tiene
    var element = document.getElementById('tableError');
    var tableRows = element.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    if(rowCount >0){
        for (var x =rowCount-1;x>=0 ; x--) {
            element.removeChild(tableRows[x]);
        }
    }
    /*while(element.firstChild){
        element.removeChild(element.firstChild);
    }*/

    //Ingresamos las nuevas variables
    for(var i=0;i<Nerrores.length;i++){
        document.getElementById('tableError').insertAdjacentHTML('beforeend',Nerrores[i]);
    }
}