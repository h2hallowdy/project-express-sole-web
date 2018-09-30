document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('#menu');
    var menuFlag = 0;
    window.addEventListener('scroll', function() {
        if (this.pageYOffset >= 50 && menuFlag === 0) {
            menu.classList.add('minimize');
            menuFlag = 1;
        }

        if (this.pageYOffset < 50 && menuFlag === 1) {
            menu.classList.remove('minimize');
            menuFlag = 0;
        }
    });

    var buttonMenu = document.getElementById('toggle');
    var list = document.querySelector('#menu .list');
    buttonMenu.addEventListener('click', function() {
        list.classList.toggle('active');
    });

}, false) ;