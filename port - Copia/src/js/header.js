

$(document).ready(function() {
    $('.btn').on('click', function() {
        $('.nav_menu').toggleClass('open');
        $('.btn i').toggleClass('fa-x');
        
        // Adiciona ou remove a classe no body para ocultar a barra de rolagem
        $('body').toggleClass('menu-open');
    });
});
