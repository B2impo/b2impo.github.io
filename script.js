if ($(window).scrollTop() > 600) {
            var firstAnimation = function () {
    $('.img').each(
        function () {
            $(this).delay(500).animate({
                opacity: 1,
                height: '320',
                width: '260',
                marginTop: '5',
            }, 2000);
        }
    );
};
        firstAnimation();
    }