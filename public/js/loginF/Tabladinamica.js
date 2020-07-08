function addTablevariable(entrada) {
    var tableBody = document.getElementById("midinamictable");
    var tableRows = tableBody.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    if(rowCount >0){
        for (var x =rowCount-1;x>=0 ; x--) {
            tableBody.removeChild(tableRows[x]);
        }
    }
    
    //luego lo llenamos de nuevo
    for (var i = 0; i < entrada.length; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < 3; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            var arraycade = entrada[i].split(";");
            td.appendChild(document.createTextNode(arraycade[j]));
            tr.appendChild(td);
        }
    }
}


function archivopy(){
    console.log("pase por la funcion");
    var contenidoDeArchivo = document.getElementById('salida4').value;
    var elem = document.getElementById('Reporpy');
    elem.download = "Reportepy.py";
    elem.href = "data:application/octet-stream," + encodeURIComponent(contenidoDeArchivo);
}

function archivoht(){
    console.log("pase por la funcion ht");
    var contenidoDeArchivo = document.getElementById('salida2').value;
    var elem = document.getElementById('Reporteht');
    elem.download = "ReporteHTML.html";
    elem.href = "data:application/octet-stream," + encodeURIComponent(contenidoDeArchivo);
}