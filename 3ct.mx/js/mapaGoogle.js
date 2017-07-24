$(document).ready(Index);

function Index(){
    var map;
    var markerR;
    var markerP;
    var marker;
    var directionDisplayP;
    var directionsServiceP = new google.maps.DirectionsService();
    var directionDisplayR;
    var directionsServiceR = new google.maps.DirectionsService();
    var latlngPolanco= new google.maps.LatLng(19.443967,-99.199328);
    var latlngCntPolanco= new google.maps.LatLng(19.443284,-99.196039);
    var latlngRoma= new google.maps.LatLng(19.406839,-99.167989);
    var tipoRuta=google.maps.DirectionsTravelMode.DRIVING;
    
    var infoPolanco = new google.maps.InfoWindow({
        content: "<div  class='globoMapa'><h2>3CT</h2>"+  		 
        "<ul><li> Cursos de Dise&ntilde;o Gr&aacute;fico:Dreamweaver Photoshop, Flash</li>"+
        "<li>Cursos de Programaci&oacute;n: Java, PHP, Visual Basic.NET </li>"+
        "<li>Cursos de Admnistrador Base de datos: Oracle, MySQL, SQL Server</li>"+
        "</ul>"+  
        "<p>M&eacute;xico, Distrito Federal, col. Ampliación Granada, Av. Moliere 515 esq. Av. Rio San Joaquin.</p></div>",
        size: new google.maps.Size(50,50)
    });

    var infoRoma = new google.maps.InfoWindow({
        content: "<div  class='globoMapa'><h2>3CT</h2>"+  		 
        "<ul><li> Cursos de Dise&ntilde;o Gr&aacute;fico:Dreamweaver Photoshop, Flash</li>"+
        "<li>Cursos de Programaci&oacute;n: Java, PHP, Visual Basic.NET </li>"+
        "<li>Cursos de Admnistrador Base de datos: Oracle, MySQL, SQL Server</li>"+
        "</ul>"+  
        "<p>M&eacute;xico, Distrito Federal, col. Roma Sur calle Tuxpan 2 piso 4 esq. Av. Insurgentes.</p></div>",
        size: new google.maps.Size(50,50)
    });
    
    var divMap=document.getElementById("divGoogleMap");
    var roma=$("#roma");
    var polanco=$("#polanco");
    
    initialize();
    
    roma.click(acercaRoma);
    polanco.click(acercaPolanco);
    
    function acercaRoma(){
        map.setCenter(latlngRoma);
        map.setZoom(17);
        infoRoma.open(map, markerR);
    }
    
    function acercaPolanco(){
        map.setCenter(latlngCntPolanco);
        map.setZoom(17);
        infoPolanco.open(map, markerP);
    }
    
    function cierraInfos(){
        infoRoma.close();
        infoPolanco.close();
    }
    
    function cambiaRuta(evento){
        if($("#radCam").attr("checked")=="checked"){
            tipoRuta=google.maps.DirectionsTravelMode.WALKING;
        }
        if($("#radAut").attr("checked")=="checked"){
            tipoRuta=google.maps.DirectionsTravelMode.DRIVING;
        }
        calculaRuta();
    }
    
    function calculaRuta(event){
        
        try{
            if(event==null){
                
            }else{
                marker.setPosition(event.latLng);
            }
            var request = {
                origin:marker.getPosition(), 
                destination:markerR.getPosition(),
                travelMode: tipoRuta
            };
            directionsServiceR.route(request, function(result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionDisplayR.setDirections(result);                
                }else{
                    alert("Roma:\nNo se ha podido encontrar una ruta ")
                }
            });
            request = {
                origin:marker.getPosition(), 
                destination:markerP.getPosition(),
                travelMode: tipoRuta
            };
            directionsServiceP.route(request, function(result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionDisplayP.setDirections(result);                
                }else{
                    alert("Polanco:\nNo se ha podido encontrar una ruta")
                }
            });
        }catch(err){
            alert("Traza una ruta primero dando click en el mapa");
        }
    }
    
    function PolancoControl(controlDiv, mapa) {

        //controlDiv.style.padding = '10px';
        controlDiv.style.paddingBottom = '15px';

        var controlUI = document.createElement('DIV');
        controlUI.className="botonInterno";
        controlUI.title = '3CT - Polanco';
        controlDiv.appendChild(controlUI);

        var controlText = document.createElement('DIV');
        controlText.innerHTML = 'Polanco';
        controlUI.appendChild(controlText);

        google.maps.event.addDomListener(controlUI, 'click', acercaPolanco);
    }
    
    function RomaControl(controlDiv, mapa) {

        //controlDiv.style.padding = '10px';
        controlDiv.style.paddingBottom = '15px';

        var controlUI = document.createElement('DIV');
        controlUI.className="botonInterno";        
        controlUI.title = '3CT - Roma';
        controlDiv.appendChild(controlUI);

        var controlText = document.createElement('DIV');
        controlText.innerHTML = 'Roma';
        controlUI.appendChild(controlText);

        google.maps.event.addDomListener(controlUI, 'click', acercaRoma);
    }
    
    function RutaControl(controlDiv, mapa) {
        controlDiv.style.padding = '10px';
        controlDiv.style.paddingTop = '400px';
        
        var controlUI = document.createElement('DIV');
        controlUI.id="divRadios";        
        controlUI.title = 'Haz click en cualquier parte del mapa para trazar una ruta';
        controlDiv.appendChild(controlUI);

        var controlText = document.createElement('DIV');
        var contenido="<label>Tipo de ruta:</label>\
                        <label class='radioRuta'><input id='radCam' type='radio' name='ruta'>Caminando</label>\n\
                        <label class='radioRuta'><input id='radAut' type='radio' name='ruta' checked='true'>Auto</label>"
        controlText.innerHTML = contenido;
        controlUI.appendChild(controlText);

        google.maps.event.addDomListener(controlUI, 'click', cambiaRuta);
    }
    
    function initialize() {
        directionDisplayR = new google.maps.DirectionsRenderer({
            preserveViewport:true
        });
        directionDisplayP = new google.maps.DirectionsRenderer({
            preserveViewport:true
        });
        var latlng = new google.maps.LatLng(19.42794,-99.180365);
        
        var estilo=[
            {
                stylers: [
                    { hue: "#006eff" },
                    { gamma: 1 },
                    { saturation: -45 }
                ]
            },
            { 
                featureType: "transit.line",
                stylers: [ 
                    { hue: "#ff001a" } 
                ] 
            }
        ];
        
        var myOptions = {
            zoom: 14,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER
            },
            scaleControl: false
        };
        map = new google.maps.Map(divMap, myOptions);
        
        var styledMapOptions = {
            map: map,
            name: "Hip-Hop"
        }
        
        var jayzMapType =  new google.maps.StyledMapType(estilo,styledMapOptions);

        map.mapTypes.set('hiphop', jayzMapType);
        map.setMapTypeId('hiphop');
        
        directionDisplayR.setMap(map);
        directionDisplayP.setMap(map);
        
        var polancoControlDiv = document.createElement('DIV');
        var polancoControl = new PolancoControl(polancoControlDiv, map);
        
        var romaControlDiv = document.createElement('DIV');
        var romaControl = new RomaControl(romaControlDiv, map);
        
        var rutaControlDiv = document.createElement('DIV');
        var rutaControl= new RutaControl(rutaControlDiv, map);

        polancoControlDiv.index = 1;
        romaControlDiv.index = 1;
        
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(polancoControlDiv);
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(romaControlDiv);
        map.controls[google.maps.ControlPosition.LEFT].push(rutaControlDiv);
        
        markerR = new google.maps.Marker({
            position: latlngRoma, 
            map: map,
            title:"3CT ROMA",
            icon:"../images/globo3CT.png"
        });
        
        markerP = new google.maps.Marker({
            position: latlngPolanco, 
            map: map,
            title:"3CT POLANCO",
            icon:"../images/globo3CT.png"
        });
        
        marker = new google.maps.Marker({
            draggable: true,
            map: map,
            title:"Inicio"
        });
        
        google.maps.event.addListener(markerR, 'click', acercaRoma);    
        google.maps.event.addListener(markerP, 'click', acercaPolanco);
        google.maps.event.addListener(map, 'zoom_changed', cierraInfos);
        google.maps.event.addListener(map, 'click', calculaRuta);
        google.maps.event.addListener(marker, 'dragend', calculaRuta);
        
    }
    
}