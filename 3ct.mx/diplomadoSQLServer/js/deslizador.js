var barra;
var taller=0;
window.onload=deslizador;
var arregloTalleres=["t0","t1","t2","t3","t4"];
function deslizador(){    
    if($('lnkUbicacion')!=null){
        var listaLnkUbicacion=$$('a#lnkUbicacion');
        //alert(listaLnkUbicacion.length);
        listaLnkUbicacion.each(function(elemento){
            elemento.onclick=function(){
                mapaGoogle();
            }
        });
        //$('lnkUbicacion').onclick=mapaGoogle;
        $('lnkCerrarMapa').onclick=cerrarMapaGoogle;
        inicio();
    }
    if($('divPerilla')!=null){
    ocultar();
	barra=new Control.Slider('divPerilla','divBarra',{
	axis:'horizontal',
	//values:[0,1,2,3,4,5],
	//increment:1,
	maximum:5,
	minimum:0,
	sliderValue:0,
	range: $R(0,5),
	//onChange:deslizar
	onSlide:deslizar
	}
    );
    //deslizar();
   }
}
	function ocultar(){
		for(var i=0;i<arregloTalleres.length;i++){
			
			taller=arregloTalleres[i];
			
			$(taller).hide();  
			
		}
	}
	function deslizar(valor){
		var barraValor=valor;
		//barra.value;
		if(barra.value==0){
			$(arregloTalleres[0]).show();
			//new Effect.BlindDown(arregloTalleres[0]);
		}else{ 
			$(arregloTalleres[0]).hide(); 
			//new Effect.BlindUp(arregloTalleres[0]);
			if(barra.value<5){
				barraValor++;
			}
			barraValor=parseInt(barraValor);
		}
		for(var i=1;i<=barraValor ;i++){
			if($(arregloTalleres[i]).visible()==false){
				//new Effect.BlindDown(arregloTalleres[i]);
				Effect.toggle($(arregloTalleres[i]), 'blind', { delay: 0.0 });
			}
		}
		for(var j= barraValor+1;j< arregloTalleres.length; j++){
			if($(arregloTalleres[j]).visible()==true){
				//new Effect.BlindUp(arregloTalleres[j]);
				Effect.toggle($(arregloTalleres[i]), 'blind', { delay: 0.0 });
			}
		}
	}
	function mapaGoogle(){
                
		
                //alert(123);

                $('divMapaGoogle').show();
                setTimeout("$('divMapaGoogle').style.position='fixed';$('divMapaGoogle').style.top='15px';",500);

                
                //new Effect.Appear('divMapaGoogle'); 
		//$$('body')[0].style.background="#ff9900";
		//$('contactoWrapper').style.background="#ff9900";
	}
	function cerrarMapaGoogle(){
		$('divMapaGoogle').hide();
		//new Effect.Fade('divMapaGoogle');
		//$$('body')[0].style.background="#EEE";
		//$('contactoWrapper').style.background="#EEE";
	}  
	var myPano;
	function inicio(){ 
		initialize();
		if (GBrowserIsCompatible()) { 
			var map = new GMap2(document.getElementById("divMapa"));
			map.setCenter(new GLatLng(19.406996, -99.167946), 15);
			map.addControl(new GLargeMapControl());
			map.addControl(new GMapTypeControl());
			GInfoWindowOptions={maxWidth:400,noCloseOnClick:true};
			map.openInfoWindowHtml(map.getCenter(), "<div id='divGloboMapa'><h2>Diplomado Webmaster 3CT</h2>"+  		 
			"<ul><li> Curso de DiseÃ±o Grafico:Dreamweaver Photoshop, Flash</li>"+
				 "<li>Curso de ProgramaciÃ³n: Java, PHP, Visual Basic.NET </li>"+
				 "<li>Curso de Admnistrador Base de datos: Oracle, MySQL, SQL Server</li>"+
			"</ul>"+  
			"<p>MÃ©xico, Distrito Federal, col. Roma Sur calle Tuxpan 2 piso 4 esq. Av. Insurgentes.</p></div>",
			GInfoWindowOptions);
			map.setMapType(G_NORMAL_MAP);
			var marker = new GMarker(new GLatLng(19.406996,-99.167946), {draggable: false});
			map.addOverlay(marker);
		} 
		setTimeout("$('divMapaGoogle').hide();", 1500 );
	} 
	function initialize() {
		var tresct = new GLatLng(19.407032,-99.167989);
		miPuntoDeVista = {yaw:115.94659986187699,pitch:-29};
		panoramaOptions = { latlng:tresct,pov:miPuntoDeVista };
		myPano = new GStreetviewPanorama(document.getElementById("pano"), panoramaOptions);
		GEvent.addListener(myPano, "error", handleNoFlash);    
	}
    function handleNoFlash(errorCode) {
		if (errorCode == FLASH_UNAVAILABLE) { 
			alert("ouch!!: Flash no esta soportado por tu navegador"); 
			return;      
		}    
	}