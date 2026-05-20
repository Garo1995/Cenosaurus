



$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-mobile').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('body').removeClass('body_fix');
            $('.menu-mobile').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('body').removeClass('body_fix');
        $('.menu-mobile').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});









let possibiltiesSlider = new Swiper(".possibilties-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".possibiltie-next",
        prevEl: ".possibiltie-prev",
    },
    breakpoints: {
        '767': {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        '320': {
            slidesPerView: 1.05,
            spaceBetween: 10,
            loop: true
        },
    },
});





let clientSlider = new Swiper(".client-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".client-button-next",
        prevEl: ".client-button-prev",
    },
    breakpoints: {
        '1199': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '1020': {
            slidesPerView: 1.3,

            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 1.3,

            spaceBetween: 10,
        },

        '320': {
            slidesPerView: 1.06,
            spaceBetween: 10,
            loop: true
        },
    },
});




let tariffsSlider = new Swiper(".tariffs-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 2.9,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 1.8,

            spaceBetween: 10,
        },

        '320': {
            slidesPerView: 1.06,
            spaceBetween: 10,
        },
    },
});



let advantagesSlider = new Swiper(".advantages-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            spaceBetween: 20,
            enabled: false,

        },
        '1020': {
            slidesPerView: 2,
            spaceBetween: 20,
            enabled: false,

        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 10,
            enabled: false,

        },
        '570': {
            slidesPerView: 1.5,
            spaceBetween: 10,
            enabled: true,
        },
        '320': {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            enabled: true,
        },
    },
});





$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});





$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body_fix');
});

$('.close').on('click', function () {

    $('body').removeClass('body_fix');
    let prt = $(this).parents('.modal');

    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
            $('body').removeClass('body_fix');
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});














$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        let $this = $(this);
        let $next = $this.next();
        let $parentBox = $this.closest('.questions-box');

        $next.slideToggle();

        if (!e.data.multiple) {
            $el.find('.submenu-faq').not($next).slideUp();
            $el.find('.link').not($this).removeClass('open');
            $el.find('.questions-box').not($parentBox).removeClass('active-box');
        }

        if (!$this.hasClass('open')) {
            $this.addClass('open');
            $parentBox.addClass('active-box');
        } else {
            $this.removeClass('open');
            $parentBox.removeClass('active-box');
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});
