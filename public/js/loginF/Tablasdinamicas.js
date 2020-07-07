function addTable() {
    //var myTableDiv = document.getElementById("midinamictable");
  
    //var table = document.createElement('TABLE');
    //table.border = '1';
  
    var tableBody = document.getElementById("midinamictable");
    //table.appendChild(tableBody);
    httpGet(ep_getcatedra,function(response){
        var result = JSON.parse(response);
        var numero = result.result.length;
        var soloarrr = result.result;
        for (var i = 0; i < numero; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
        
            for (var j = 0; j < 3; j++) {
              var td = document.createElement('TD');
              td.width = '75';
              if(j==0){

                  td.appendChild(document.createTextNode(soloarrr[i].codigo ));
                  tr.appendChild(td);
              }else if(j==1){
                td.appendChild(document.createTextNode(soloarrr[i].nombre));
                tr.appendChild(td);
              }else{
                  var acti = document.createElement('a');
                  var idd = document.createElement('i');
                  idd.setAttribute("class","mdi mdi-check"); 
                  acti.appendChild(idd);
                  acti.setAttribute("data-toggle","tooltip");
                  acti.setAttribute("data-placement","top");
                  acti.setAttribute("title","Update");
                  acti.setAttribute("href","#");
                  
                  var acti2 = document.createElement('a');
                  var idd2 = document.createElement('i');
                  idd2.setAttribute("class","mdi mdi-close"); 
                  acti2.appendChild(idd2);
                  acti2.setAttribute("data-toggle","tooltip");
                  acti2.setAttribute("data-placement","top");
                  acti2.setAttribute("title","Delete");
                  acti2.setAttribute("href","#");
                  acti2.setAttribute("onclick","obtenerValores($(this).parents('TR').find('TD').get())");
      
      
                  td.appendChild(acti);
                  td.appendChild(acti2);
                  tr.appendChild(td);
                  //tr.setAttribute("onclick","verpadre(this)");
              }
              
            }
          }
    });
  
    
    //myTableDiv.appendChild(table);
  }

  function obtenerValores(e) {
    var valores=[];
    var codir = e[0].innerHTML;
    var nomi = e[1].innerHTML;
    var obj = new Object();
    obj.codigo=codir;
    obj2 = JSON.stringify(obj);

    httpPost(ep_EliminarCate,obj2,function(response){
        var result = JSON.parse(response);
        if(result.result == "true"){
            toastr.info("Borrado exitosamente","Gracias");
            //window.location.href="http://192.168.0.15:8080/html/ltr/index.html";
            setTimeout("window.location.reload()",400);
        }else{
            toastr.error("Credenciales Incorrectas","Error al inicio de sesion");
            //window.location.href="http://192.168.0.15:8080/html/ltr/index.html";
            setTimeout("window.location.reload()",400);
        }
    })

  
}
function obtenerValoreslista(e) {
    var valores=[];
    var codir = e[0].innerHTML;
    var nomi = e[1].innerHTML;
    var obj = new Object();
    obj.codigo=codir;
    obj2 = JSON.stringify(obj);

    httpPost(ep_Eliminarlista,obj2,function(response){
        var result = JSON.parse(response);
        if(result.result == "true"){
            toastr.info("Borrado exitosamente","Gracias");
            //window.location.href="http://192.168.0.15:8080/html/ltr/index.html";
            setTimeout("window.location.reload()",400);
        }else{
            toastr.error("Credenciales Incorrectas","Error al inicio de sesion");
            //window.location.href="http://192.168.0.15:8080/html/ltr/index.html";
            setTimeout("window.location.reload()",400);
        }
    })

  
}
function addTablecurso() {
    //var myTableDiv = document.getElementById("midinamictable");
  
    //var table = document.createElement('TABLE');
    //table.border = '1';
  
    var tableBody = document.getElementById("midinamictable");
    //table.appendChild(tableBody);
    httpGet(ep_getcurso,function(response){
        var result = JSON.parse(response);
        var numero = result.result.length;
        var soloarrr = result.result;
        for (var i = 0; i < numero; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
        
            for (var j = 0; j < 4; j++) {
              var td = document.createElement('TD');
              td.width = '75';
              if(j==0){

                  td.appendChild(document.createTextNode(soloarrr[i].codigoc ));
                  tr.appendChild(td);
              }else if(j==1){
                td.appendChild(document.createTextNode(soloarrr[i].nomcurso));
                tr.appendChild(td);
              }else if(j==2){
                td.appendChild(document.createTextNode(soloarrr[i].nombreprofe));
                tr.appendChild(td);
              }
              else{
                  var acti = document.createElement('a');
                  var idd = document.createElement('i');
                  idd.setAttribute("class","mdi mdi-check"); 
                  acti.appendChild(idd);
                  acti.setAttribute("data-toggle","tooltip");
                  acti.setAttribute("data-placement","top");
                  acti.setAttribute("title","Update");
                  acti.setAttribute("href","#");
                  
                  var acti2 = document.createElement('a');
                  var idd2 = document.createElement('i');
                  idd2.setAttribute("class","mdi mdi-close"); 
                  acti2.appendChild(idd2);
                  acti2.setAttribute("data-toggle","tooltip");
                  acti2.setAttribute("data-placement","top");
                  acti2.setAttribute("title","Delete");
                  acti2.setAttribute("href","#");
                  acti2.setAttribute("onclick","obtenerValoreslista($(this).parents('TR').find('TD').get())");
      
      
                  td.appendChild(acti);
                  td.appendChild(acti2);
                  tr.appendChild(td);
                  
              }
              
            }
          }
    });
  
  }