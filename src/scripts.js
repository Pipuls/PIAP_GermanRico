jQuery('document').ready(function($){

    var menuBtn = $(".menu-icon");
    var listado = $(".navigation ul");

    menuBtn.click(function() {

        if (listado.hasClass('show')) {
            
            listado.removeClass('show');
        
        } else {
            listado.addClass('show');
        }
    });
    
});