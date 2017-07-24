window.onload=ubicanos;
function ubicanos(){    
    if($('lnkUbicacionChilpancingo')!=null){
        $('lnkUbicacionChilpancingo').onclick=mapaGoogleChilpancingo;        
        $('lnkCerrarMapaChilpancingo').onclick=cerrarMapaGoogleChilpancingo;
        inicioChilpancingo();
    }
	if($('lnkUbicacionPolanco')!=null){
        $('lnkUbicacionPolanco').onclick=mapaGooglePolanco;        
        $('lnkCerrarMapaPolanco').onclick=cerrarMapaGooglePolanco;
        inicioPolanco();
    }
}	
	function mapaGoogleChilpancingo(){
		$('divMapaGooglePolanco').hide();
        $('divMapaGoogleChilpancingo').show();
        setTimeout("$('divMapaGoogleChilpancingo').style.position='fixed';$('divMapaGoogleChilpancingo').style.top='15px';",500);
	}
	function cerrarMapaGoogleChilpancingo(){
		$('divMapaGoogleChilpancingo').hide();
	}  
	var myPano;
	function inicioChilpancingo(){ 
		initializeChilpancingo();
		if (GBrowserIsCompatible()) { 
			var map = new GMap2(document.getElementById("divMapaChilpancingo"));
			map.setCenter(new GLatLng(19.406591,-99.1680), 15);
			
			map.addControl(new GLargeMapControl());
			map.addControl(new GMapTypeControl());
			GInfoWindowOptions={maxWidth:400,noCloseOnClick:true};
			map.openInfoWindowHtml(map.getCenter(), "<div  class='globoMapa'><h2>3CT</h2>"+  		 
			"<ul><li> Cursos de Dise&ntilde;o Gr&aacute;fico:Dreamweaver Photoshop, Flash</li>"+
				 "<li>Cursos de Programaci&oacute;n: Java, PHP, Visual Basic.NET </li>"+
				 "<li>Cursos de Admnistrador Base de datos: Oracle, MySQL, SQL Server</li>"+
			"</ul>"+  
			"<p>M&eacute;xico, Distrito Federal, col. Roma Sur calle Tuxpan 2 piso 4 esq. Av. Insurgentes.</p></div>",
			GInfoWindowOptions);
			map.setMapType(G_NORMAL_MAP);
			var marker = new GMarker(new GLatLng(19.406591,-99.1680), {draggable: false});
			map.addOverlay(marker);
		} 
		setTimeout("$('divMapaGoogleChilpancingo').hide();", 1500 );
	} 
	function initializeChilpancingo() {
	
		var tresct = new GLatLng(19.407289,-99.168206);		
		miPuntoDeVista = {yaw:148.87,pitch:-4.73};
		panoramaOptions = { latlng:tresct,pov:miPuntoDeVista };
		myPano = new GStreetviewPanorama(document.getElementById("panoChilpancingo"), panoramaOptions);
		GEvent.addListener(myPano, "error", handleNoFlash);    
	}
    function handleNoFlash(errorCode) {
		if (errorCode == FLASH_UNAVAILABLE) { 
			alert("ouch!!: Flash no esta soportado por tu navegador"); 
			return;      
		}    
	}
	
	/*  --- polanco---- */
	//http://maps.google.com/?ie=UTF8&ll=19.443851,-99.199398&spn=0,0.02738&z=16&layer=c&cbll=19.443863,-99.199401&panoid=3FRte3OBUvT1UjezRPID2g&cbp=12,75.6,,0,1.05
	function mapaGooglePolanco(){
		$('divMapaGoogleChilpancingo').hide();
        $('divMapaGooglePolanco').show();
        setTimeout("$('divMapaGooglePolanco').style.position='fixed';$('divMapaGooglePolanco').style.top='15px';",500);
	}
	function cerrarMapaGooglePolanco(){
		$('divMapaGooglePolanco').hide();
	}  
	var myPanoPolanco;
	function inicioPolanco(){ 
		initializePolanco();
		if (GBrowserIsCompatible()) { 
			var map2 = new GMap2(document.getElementById("divMapaPolanco"));
			map2.setCenter(new GLatLng(19.443851,-99.199398), 15);
			
			map2.addControl(new GLargeMapControl());
			map2.addControl(new GMapTypeControl());
			GInfoWindowOptions={maxWidth:400,noCloseOnClick:true};
			map2.openInfoWindowHtml(map2.getCenter(), "<div class='globoMapa'><h2>3CT</h2>"+  		 
			"<ul><li> Cursos de Dise&ntilde;o Gr&aacute;fico:Dreamweaver Photoshop, Flash</li>"+
				 "<li>Cursos de Programaci&oacute;n: Java, PHP, Visual Basic.NET </li>"+
				 "<li>Cursos de Admnistrador Base de datos: Oracle, MySQL, SQL Server</li>"+
			"</ul>"+  
			"<p>M&eacute;xico, Distrito Federal,  calle Moliere 515 esq R&iacute;o San Joaqu&iacute;n.</p></div>",
			GInfoWindowOptions);
			map2.setMapType(G_NORMAL_MAP);
			var marker2 = new GMarker(new GLatLng(19.443851,-99.199398), {draggable: false});
			map2.addOverlay(marker2);
		} 
		setTimeout("$('divMapaGooglePolanco').hide();", 1500 );
	} 
	function initializePolanco() {
	
		var tresct2 = new GLatLng(19.443851,-99.199398);
		miPuntoDeVista2 = {yaw:75.6,pitch:1.05};
		panoramaOptions2 = { latlng:tresct2,pov:miPuntoDeVista2 };
		myPanoPolanco = new GStreetviewPanorama(document.getElementById("panoPolanco"), panoramaOptions2);
		GEvent.addListener(myPanoPolanco, "error", handleNoFlash);    
	}