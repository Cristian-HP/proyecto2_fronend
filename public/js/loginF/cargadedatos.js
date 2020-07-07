var id_cambio = "prueba";
function handleFiles(files,id) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		id_cambio = id;
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
	var lines = [];
	var cuenta =0;
    while (cuenta<(allTextLines.length-1)) {
		lines.push(allTextLines[cuenta]);
		var paramst = [];
		var lalinea = lines[cuenta];
		paramst[0]="prueba";
		paramst.push(lines[cuenta].split(';'));
		var nom = paramst[1];
		if(id_cambio == "catedratico"){
			jsoncatedra(nom[1],nom[0]);
		}else if(id_cambio == "curso"){
			jsoncurso(nom[0],nom[1],nom[2]);
			//setTimeout('toastr.info("ERROR inesperado favor volver a intentarol")',400);
			
		}else if(id_cambio == "salon"){
			toastr.success("ERROR inesperado favor volver a intentarol")
		}else{
			toastr.error("ERROR inesperado favor volver a intentarol")
		}
		cuenta++;
		console.log(paramst);
    }
	console.log(lines);
	drawOutput(lines);
}

//if your csv file contains the column names as the first line
function jsoncatedra(nombre,codigo){
	var jsonarms = new Object();
	jsonarms.codigo = codigo;
	jsonarms.nombre = nombre;
	var catedrajson = '{"Catedratico":' + JSON.stringify(jsonarms) + '}';
	var jsonll = new Object(catedrajson);
	httpPost(ep_pcatedra,jsonll,function(response){
        var result = JSON.parse(response);
        if(result.result == "true"){
            toastr.success("SE Insertaron los  ","Datos corrextamente");
        }else{
            toastr.error("FALLO En la","Insercion de DAtos");
        }
    })
}

function jsoncurso(codigo,nombre,catedratico){
	var jsonarms = new Object();
	jsonarms.codigo = codigo;
	jsonarms.nombre = nombre;
	jsonarms.idprofe = catedratico;
	var cadenajson = JSON.stringify(jsonarms);
	httpPost(ep_INcurso,cadenajson,function(response){
        var result = JSON.parse(response);
        if(result.result == "true"){
            toastr.success("SE Insertaron los  ","Datos corrextamente");
        }else{
            toastr.error("FALLO En la","Insercion de DAtos");
        }
    })

}
function jsonsalon(codigo,curso,catedratico){
	var jsonarms = new Object();
	jsonarms.codigo = codigo;
	jsonarms.curso = curso;
	jsonarms.idprofe = catedratico;
	var cadenajson = JSON.stringify(jsonarms);
	httpPost(ep_pcatedra,cadenajson,function(response){
        var result = JSON.parse(response);
        if(result.result == "true"){
            toastr.success("SE Insertaron los  ","Datos corrextamente");
        }else{
            toastr.error("FALLO En la","Insercion de DAtos");
        }
    })

}
function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}


