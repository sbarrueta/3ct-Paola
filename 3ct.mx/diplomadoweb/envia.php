<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><!-- InstanceBegin template="/Templates/principal.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<!-- InstanceBeginEditable name="doctitle" -->
<title>Diplomado Web 2.0 en 3CT</title>
<!-- InstanceEndEditable -->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/interface.js"></script>
<script src="js/ajax.js" type="text/javascript"></script>
<script src="js/jquery-easing.1.2.pack.js" type="text/javascript"></script>
<script src="js/jquery-easing-compatibility.1.2.pack.js" type="text/javascript"></script>
<script src="js/coda-slider.1.1.1.pack.js" type="text/javascript"></script>
<script type="text/javascript">
		jQuery(window).bind("load", function() {
			jQuery("div#slider1").codaSlider()
			// jQuery("div#slider2").codaSlider()
			// etc, etc. Beware of cross-linking difficulties if using multiple sliders on one page.
		});
	</script>

<!--[if lt IE 7]>
 <style type="text/css">
 div, img { behavior: url(iepngfix.htc) }
 </style>
<![endif]-->

<link href="style.css" rel="stylesheet" type="text/css" />
<!-- InstanceBeginEditable name="head" --><!-- InstanceEndEditable -->
</head>
<body>
	<a title="Visita nuestro sitio en Facebook" href="http://www.facebook.com/pages/Diplomado-web-20-Solo-codigo/180353088643785?v=info"><img src="images/fb.png" style="position:absolute; left:100px; top:580px"/></a>
<div class="cabecera"><a href="http://3ct.com.mx" target="_blank"><img class="logo" src="images/logoChico.png" /></a>

  <h1>Diplomado web 2.0 <em>&laquo;s&oacute;lo c&oacute;digo</em>&raquo;</h1>

 
</div>
<!--<div style="position:absolute; left:80%; top:10%" >
	<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#appId=APP_ID&amp;xfbml=1"></script><fb:login-button show-faces="true" width="200" max-rows="1"></fb:login-button>
</div>-->
<div class="dock" id="dock">
  <div class="dock-container">
  
  <a class="dock-item"  href="index.html"><img src="images/inicio.png" alt="Inicio" /></a>     
  <a class="dock-item" href="js.html"><img src="images/JS.png" alt="Capa del cliente" /></a> 
  <a class="dock-item" href="php.html"><img src="images/PHP.png" alt="Capa del servidor" /></a> 
  <a class="dock-item" href="ajax.html"><img src="images/AJAX.png" alt="Interacci�n entre capas" /></a> 
  <a class="dock-item" href="integracion.html"><img src="images/integracion.png" alt="Integraci�n" /></a> 
  <a class="dock-item" href="contacto.html"><img src="images/contacto.png" alt="Contacto" /></a>
  <a class="dock-item" href="temario.pdf"><img src="images/temario.png" alt="Temario" /></a>
  </div>
  
</div>
<script type="text/javascript">
	
	$(document).ready(
		function()
		{
			$('#dock').Fisheye(
				{
					maxWidth: 50,
					items: 'a',
					itemsText: 'span',
					container: '.dock-container',
					itemWidth: 75,
					proximity: 30,
					halign : 'center'
				}
			)
		}
	);

</script>
<div class="contenido">
	<!-- InstanceBeginEditable name="EditRegion3" -->
    <div class="slider-wrap" >
    
        <div id="slider1" class="csw">
         
         
         	<?php 
          		$contenido="Contacto email: ".$_REQUEST['email']."\nComentario:".$_REQUEST['comentario'];
          		if(mail('juliocld@3ct.com.mx',"Nuevo diplomado",$contenido)){?>
    		<h3>Tu solicitud ha sido enviada</h3> <p> En breve tendr�s noticias nuestras</p>		
    
    <?php }else{?>
    Error en el env�o de datos. Por favor env�a un correo a: juliocld@3ct.com.mx
		<?php }?>
         
          <!-- .panelContainer -->
  <!-- InstanceEndEditable --></div>
      <!-- #slider1 -->
<!-- .slider-wrap -->
    
    <!-- 
    	Aqu� termina el Slider
    -->
  <div class="pie"><p>Desarrollado por <a href="http://consultoria.3ct.mx" title="Consultor�a en 3CT" target="_blank">3CT-Consultor�a</a></p></div>

</body>
<!-- InstanceEnd --></html>
