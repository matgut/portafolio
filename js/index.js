$('#navbarNav ul li a').click(function () {
    $('#navbarNav ul li').removeClass('active');
    $(this).parent().addClass('active');
    
});
