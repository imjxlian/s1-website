jQuery(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('#scroll_up').fadeIn(700);
            } else {
                $('#scroll_up').fadeOut(700);
            }
        });
    });
});