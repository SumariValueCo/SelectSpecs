// document ready function
$(document).ready(function(){
    // help dropdown toggle function
    $('.help-toggle').click(function(){
        $(this).children('.arrow-icon').toggleClass('active');
        $(this).next('.help-dropdown').toggleClass('open');
    })

    // country dropdown toggle function
    $('.country-link').click(function(){
        $(this).children('.arrow-icon').toggleClass('active');
        $(this).next('.country-dropdown').toggleClass('open');
    })

    // Sidebar toggle function
    $('#sidebarCollapse').on('click', function () {
       $('#sidebar').toggleClass('active');
       $(this).toggleClass('active');
       $('.content-wrap').toggleClass('is-open-left');
       $('.backdrop-overlay').toggleClass('visible');
    });
             
    // sidebar close function for close sidebar when click on close button and backdrop overlay
    $('.sidebarclose').click(function(){
       $('.backdrop-overlay').removeClass('visible');
       $('.content-wrap').removeClass('is-open-left');
       $('#sidebar').removeClass('active');
    })
});