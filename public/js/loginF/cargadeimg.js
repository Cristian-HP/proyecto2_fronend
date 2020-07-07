function cargaimg(){
    var imgarbol = document.getElementById("prueba");
    var imgarbolpop = document.getElementById("prueba2");
    var imglista = document.getElementById("listabb");
    var imglistapop = document.getElementById("listabb2");
    httpGet(ep_getimgcatedra,function(response){
        var result = JSON.parse(response);
        var parti = result.result.split("=");
        //var partifl = parti.split("\\");
        var resulsolo = "data:image/png;base64,"+parti[0];
        imgarbol.setAttribute("src",resulsolo);
        imgarbolpop.setAttribute("href",resulsolo);
    });
    httpGet(ep_getimgcurso,function(response){
        var result = JSON.parse(response);
        var parti = result.result.split("=");
        //var partifl = parti.split("\\");
        var resulsolo = "data:image/png;base64,"+parti[0];
        imglista.setAttribute("src",resulsolo);
        imglistapop.setAttribute("href",resulsolo);
    });
}