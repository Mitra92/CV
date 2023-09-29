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

// Обработка данных из формы
document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Получаем данные из формы
        var lastName = document.getElementById("lastName").value;
        var firstName = document.getElementById("firstName").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var email = document.getElementById("email").value;

        // Здесь можно добавить код для отправки данных на сервер
        // Например, с использованием AJAX запроса или другого метода
        // Для примера, выведем данные в консоль
        console.log("Фамилия:", lastName);
        console.log("Имя:", firstName);
        console.log("Номер телефона:", phoneNumber);
        console.log("Email:", email);
        
        // Очищаем поля формы
        contactForm.reset();
    });
});
