(function () {
    const menu = document.querySelector('.nav-toggle');
    const navRight = document.querySelector('.nav-right');

    menu.addEventListener('click', toggleMenu);

    function toggleMenu() {
        menu
            .classList
            .toggle('is-active');
        navRight
            .classList
            .toggle('is-active');
    }
})();

$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});
