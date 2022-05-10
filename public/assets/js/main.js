window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    const toTop = document.querySelector('.to-top');

    if (loader) {
        loader.classList.add('hide');

        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }

    // Scroll
    window.addEventListener('scroll', function() {
        const mainMenu = document.querySelector('.main-menu-area');
        const pos = window.scrollY;

        if (mainMenu) {
            if (pos >= 100) {
                mainMenu.classList.add('fixed-menu', 'animate', 'slideInDown');
            } else {
                mainMenu.classList.remove('fixed-menu', 'animate', 'slideInDown');
            }
        }

        // Scroll to top button
        if (pos >= 500) {
            toTop.classList.add('fixed-totop');
        } else {
            toTop.classList.remove('fixed-totop');
        }
    });

    // Animations
    new WOW().init();

});
