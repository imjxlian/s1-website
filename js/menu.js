jQuery(function () {
    $(document).ready(function () {
        $('.menu_hamburger').click(function () {
            if ($('.menu_mobile').css('display') != "block") {
                $('.menu_mobile').slideDown(300);
            } else {
                $('.menu_mobile').slideUp(300);
            }
        });
    });
});