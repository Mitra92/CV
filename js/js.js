//Плавный переход по кнопке "Вверх"

window.onload = function() {
    var scrolled;
    var timer;

    document.getElementById('top1').onclick = function() {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 200;
            timer = setTimeout(scrollToTop, 10);

        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}

//Плавный скролл по якорям

function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 200);
    return false;
}