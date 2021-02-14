$(function () {
    const burgerbtn = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const list = document.querySelectorAll('.question__main-text');
    const blogitem = document.querySelectorAll('.blog__content-card');
    $('.designers__slider').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<img class="arrow__slider" src="img/slider-arrow-right.png" alt="">',
        nextArrow: '<img class="arrow__slider arrow__slider-right" src="img/slider-arrow-left.png" alt="">',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }
        }]
    });

    function listActive(event) {
        let ul = event.target.parentNode.querySelector('ul');
        if (ul.style.display == '' || ul.style.display == 'none') {
            ul.style.display = 'block'
        } else {
            ul.style.display = 'none'
        }
    }

    function burger() {
        burgerbtn.classList.toggle('active')
        if (burgerbtn.classList.contains('active')) {
            menu.classList.add('active')
        } else {
            menu.classList.remove('active')
        }
    };

    function openItemLink(event) {
        let link = event.target.querySelector('.blog__card-img');
        let linkSubtitle = event.target.querySelector('.blog__card-subtitle');
        let linkLorem = event.target.querySelector('.blog__card-lorem');
        let background = event.target.childNodes[1]
        if (link.style.display == '' || background.style.backgroundColor == '' || linkSubtitle.style.color == '' || linkLorem.style.color == '') {
            linkSubtitle.style.color = 'white'
            linkLorem.style.color = 'white'
            link.style.display = 'block'
            background.style.backgroundColor = '#' + '414141'
        } else {
            linkSubtitle.style.color = ''
            linkLorem.style.color = ''
            background.style.backgroundColor = ''
            link.style.display = ''
        }
    }
    window.onscroll = function showHeader() {
        const header = document.querySelector('.header__cap')
        if (window.pageYOffset > 200) {
            header.classList.add("header__fixed")
            header.style.backgroundColor = 'white'
        } else {
            header.classList.remove('header__fixed')
        }
    }
    for (let i of blogitem) {
        i.addEventListener('click', openItemLink)
    }
    for (let item of list) {
        item.addEventListener('click', listActive)
    }
    burgerbtn.addEventListener('click', burger)
    new WOW().init();
});