"use strict";
const wrapper = document.querySelector('.wrapper');
window.addEventListener('resize', function(){
    if(window.innerWidth>840){
        document.documentElement.classList.remove('burgered')
    }
})
let links = document.querySelectorAll('.menu__link');
let slider = new Swiper('.slides', {
    wrapperClass: "slides__wrapper",
    slideClass: "slide",
    direction: 'vertical',
    parallax: true,
    slidesPerView: 'auto',
    keyboard: {
        enabled: true,
        pageUpDown: true,
        onlyInViewport: true
    },
    speed: 500,
    mousewheel: {
        sensitivity: 1,
    },
    navigation: {
        nextEl: '.slides__next',
        prevEl: '.slides__prev',
    },
    pagination: {
        el: '.slides__pagination',
        bulletClass: 'slides__bullet',
        bulletActiveClass: 'slides__active',
        clickable: true,
    },
    scrollbar: {
        el: '.slides__scrollbar',
        draggable: true,
        dragClass: 'slides__dragscroll'
    },
    watchOverflow: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    init: false,
    on: {
        init: function(){
            menu();
            wrapper.classList.add('_loaded');
            scrollType()
        },
        slideChange: function(){
            links.forEach(item =>{
                item.classList.remove('_activeLink')
            });
            links[slider.realIndex].classList.add('_activeLink');
            change()
        },
        resize: function(){
            scrollType()
        }
    }, 
})
let sliderInslider = new Swiper('.swiper', {
    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',
    speed: 800,
    keyboard: {
        enabled: true,
        pageUpDown: false,
    },
    navigation: {
        nextEl: '.swiper__next',
        prevEl: '.swiper__prev',
    }
})


function menu (){
    
    if(links.length>0){
        links[slider.realIndex].classList.add('_activeLink')
        for(let i = 0; i<links.length; i++){ 
            links[i].addEventListener('click', function(event){
                event.preventDefault();
                links.forEach(item =>{
                    item.classList.remove('_activeLink');
                    document.documentElement.classList.remove('burgered')
                })
                slider.slideTo(i, 800);
                event.target.classList.add('_activeLink');
            })
        }
    }
}

document.addEventListener("click", function(event){
    if(event.target.closest('.menu__burger')){
        this.documentElement.classList.toggle('burgered');
    }
});
const slides = document.querySelectorAll('.slide')
function scrollType(){
    if(wrapper.classList.contains('_free')){ 
        wrapper.classList.remove('_free')
        slider.params.freeMode.enabled = false;
    }
    for(let x = 0; x<slider.slides.length; x++){
        const content = slider.slides[x].querySelector('.slide__content');
        if(content){
            const contentHeight = content.offsetHeight;
            if(contentHeight>window.innerHeight){
                wrapper.classList.add('_free');
                slider.params.freeMode.enabled = true;
                break;
            }
        }
    }
}
slider.init();
const buttons = document.querySelector('.slides__pagination');

console.log(title)
function change (){
    buttons.style.opacity = '1';
    buttons.style.visibility = 'visible'; 
    buttons.style.transition = '';
    if(slider.realIndex == 2){
        buttons.style.opacity = '0';
        buttons.style.visibility = 'hidden'; 
        buttons.style.transition = 'all 1s ease 0.5s'
    }
}