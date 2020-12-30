jQuery(function () {
    $(document).ready(function () {
        $('.menu_hamburger').click(function () {
            if ($('.menu_mobile').css('display') != "block") {
                $('.menu_mobile').slideDown(300);
                $('#trait_1').toggleClass('rotate1');
                $('#trait_2').toggleClass('rotate2');
                $('#trait_3').fadeTo(0, 0);
            } else {
                $('.menu_mobile').slideUp(300);
                $('#trait_1').removeClass('rotate1');
                $('#trait_2').removeClass('rotate2');
                $('#trait_3').fadeTo(100, 100);
            }
        });
        $('.menu_cross').click(function () {
            if ($('.menu_mobile').css('display') != "block") {
                $('.menu_mobile').slideDown(300);
                $('#trait_1').toggleClass('rotate1');
                $('#trait_2').toggleClass('rotate2');
                $('#trait_3').fadeTo(0, 0);
            } else {
                $('.menu_mobile').slideUp(300);
                $('#trait_1').removeClass('rotate1');
                $('#trait_2').removeClass('rotate2');
                $('#trait_3').fadeTo(100, 100);
            }
        });
    });
});