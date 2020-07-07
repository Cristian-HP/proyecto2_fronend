var numtab = 1; 
var tabselec = 1;

function nuevaTabs(){
    document.getElementById('tabuladores').insertAdjacentHTML('beforeend',"<li><a href=\"#tab" + numtab + "\" onclick=\"cambiarPestana()\"></span><span class=\"tab-text\">archivo" + numtab + "</span></a></li>");
    
    document.getElementById('areas').insertAdjacentHTML('beforeend',"<textarea  class=\"form-control\" wrap=\"off\" id = \"tab" + numtab + "\" cols=\"55\" rows=\"20\"></textarea>");

    
    $('ul.tabs li a').removeClass('active');

    $('ul.tabs li a:last').addClass('active');

    
    $('.secciones textarea').hide();
    $('.secciones textarea:last').show();

    tabselec = numtab;   
    numtab = numtab + 1;
}


function cambiarPestana(){
    $('ul.tabs li a').click(function(){
        
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
    
       
        $('.secciones textarea').hide();
    
        
        var activeTab = $(this).attr('href');
        tabselec = activeTab.replace('#tab',''); 
        $(activeTab).show();
    });
}


function abrirNuevaPestana(){
    var archivos = document.getElementById("archivos");
    archivos.addEventListener("change", procesar, false);

}

function procesar(e){
    
    var archivos = e.target.files;
    var mi_archivo = archivos[0];
    if(mi_archivo.type.match(/text/)){
        
        document.getElementById('tabuladores').insertAdjacentHTML('beforeend',"<li><a href=\"#tab" + numtab + "\" onclick=\"cambiarPestana()\"></span><span class=\"tab-text\">"+ mi_archivo.name +"</span></a></li>");
        
        document.getElementById('areas').insertAdjacentHTML('beforeend',"<textarea class=\"form-control\" wrap=\"off\" id = \"tab" + numtab + "\" cols=\"55\" rows=\"20\"></textarea>");
        
        $('ul.tabs li a').removeClass('active');
        
        $('ul.tabs li a:last').addClass('active');

        
        $('.secciones textarea').hide();
        $('.secciones textarea:last').show();
        var lector = new FileReader();
        lector.readAsText(mi_archivo);
        lector.addEventListener("load",mostrarTexto, false);
        
    } else{
        alert("Selecciona un archivo de texto por favor")
    }
}

function mostrarTexto(e){
    var resultado = e.target.result;
    document.getElementById('tab'+numtab).value = resultado;
    tabselec = numtab;
    numtab = numtab + 1; 
}

function enviarAlanalisis(){
    ParserTexto("tab"+tabselec);
}

window.addEventListener("load",abrirNuevaPestana,false);

