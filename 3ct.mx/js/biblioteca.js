// JavaScript Document
	        function muestraPrecioInicial(texto){
				$("#divPrecio").click(function(){
					$("#frecuencia").text("Inicial");
					$("#precio").text(texto);
				});
				$("#divPrecio").mouseenter(function(){
					$("#frecuencia").text("Inicial");
					$("#precio").text(texto);
				});
			}
	        function muestraPrecioSemanal(texto){
				$("#divPrecio").mouseleave(function(){
					$("#precio").text(texto);
					$("#frecuencia").text("Semanal");
				});
			}

	        function muestraPrecioMensual(texto){
				$("#divPrecio").mouseleave(function(){
					$("#precio").text(texto);
					$("#frecuencia").text("Mensual");
				});
			}