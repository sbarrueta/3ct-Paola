$(document).ready(Index);

function Index(){

    cargaMenu();

    function cargaMenu(){
        $.ajax({
            url: "menuLateral.html",
            success: function(data) {
                $("#sidebar").html(data);
            }
        })
    }

}