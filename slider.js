document.addEventListener('DOMContentLoaded', function() {
    let sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        let list = slider.querySelector('.list');
        let items = slider.querySelectorAll('.list .item');
        let dots = slider.querySelectorAll('.dots li');
        let prev = slider.querySelector('.buttons #prev');
        let next = slider.querySelector('.buttons #next');

        if (!list || items.length === 0 || !prev || !next) {
            return;
        }

        let active = 0;
        let lengthitems = items.length - 1;

        next.onclick = function() {
            if (active + 1 > lengthitems) {
                active = 0;
            } else {
                active = active + 1;
            }
            reloadslider();
        }

        prev.onclick = function() {
            if (active - 1 < 0) {
                active = lengthitems;
            } else {
                active = active - 1;
            }
            reloadslider();
        }

        let autoslide = setInterval(() => { next.click(); }, 8000);

        function reloadslider() {
            let checkleft = items[active].offsetLeft;
            list.style.left = -checkleft + 'px';

            let lastactiveDot = slider.querySelector('.dots li.active');
            if (lastactiveDot) lastactiveDot.classList.remove('active');
            dots[active].classList.add('active');
        }

        dots.forEach((li, key) => {
            li.addEventListener('click', function() {
                active = key;
                reloadslider();
            })
        });

        slider.addEventListener('mouseenter', function() {
            clearInterval(autoslide);
        });

        slider.addEventListener('mouseleave', function() {
            autoslide = setInterval(() => { next.click(); }, 8000);
        });
    });
});