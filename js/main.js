"use strict";
// Document Object Model //
// alert - сообщение, confirm - подтверждение, prompt - ввод; //
// поиск по id начинается с решетки '#'; //

// Навигация // 


// Поиск элементов //

/* append - внутрь в конец, prepend - внутрь вначало*/ 

/*



container.insertAdjacentHTML(
    'afterend',
    `<button data-say-hi='yes' class='created'>Вставленный <span>текст</span></button>`
);



const style = getComputedStyle(java);
console.log(style.fontSize);
console.log(parseInt(style.fontSize));
console.log(java.tagName);
console.log(created.dataset.sayHi);
*/

/* прокрутка и координаты */

/*const width = window.innerWidth;
const width1 = all.clientWidth;
const height = all.clientHeight;
console.log(width);
console.log(width1);
console.log(height);
const scrollY = window.pageYOffset;
console.log(parseInt(scrollY));

function scrollBy (){
    window.scrollBy(0, 100);
}



function scrollPage(){
    window.scrollTo({
        top : 100,
        left : 0, 
        behavior: 'smooth',
    });
}



function intoview (top) {
    java.scrollIntoView(top);
}

const parent = java.offsetParent;
console.log(parent);
console.log(java.offsetLeft);
console.log(java.offsetWidth);
console.log(java.offsetHeight);
console.log(java.clientWidth);
console.log(java.clientLeft);
*/

/* getBoundingClientRect находит координаты обьекта */;

/*const rect = java.getBoundingClientRect();
console.log(parseInt(rect.top));
console.log(parseInt(rect.bottom));
console.log(parseInt(rect.height));
let fromtop = java.getBoundingClientRect().top;
console.log(fromtop);
let scrolledfromtop = fromtop + window.pageYOffset;
console.log(scrolledfromtop);
*/

/* elementFromPoint наоборот находит обьект по координатам */;

/*let find = document.elementFromPoint(114, 235);
console.log(find);
*/

/* События */

/*function clicker (){
    console.log('tim');
}

created.onclick = clicker;
*/

/*function stop(){
    console.log(12);
    created.removeEventListener('click', stop);
} 
created.addEventListener('click', stop);

function stopped(){
    console.log('Messi');
}
const options = {
    
    once: true,
}
created.addEventListener('click', stopped, options);
*/

/* event.stopPropagation - клик сработает только на конкретном блоке,
и не сработает на родительских
 */
/* "capture": true позволяет выполнить действие на конкретном 
элементе в первую очередь
 */


/*form.addEventListener('focus', function(){
    form.style.backgroundColor=`gray`;
}, parametres);
form.addEventListener('blur', function(){
    form.style.backgroundColor=`transparent`;
}, parametres)

Name.focus();
setTimeout(() => {
    Name.blur();
    Pass.focus();
}, 3000);
setTimeout(() => {
    Pass.blur();
    info.focus();
}, 6000);
*/



/*age.forEach(ageItem => {
    ageItem.addEventListener('change', function(){
        select.value=3;
    })
});
*/
const opener = document.querySelector('.opener');
document.addEventListener("click", function(event){
    if(event.target.closest('.opener')){
        document.documentElement.classList.toggle('opened');
    }
    else if(event.target.closest('.menu__burger')){
        document.documentElement.classList.toggle('burgered');
        document.body.classList.toggle('locked');
    };
});
const links = document.querySelectorAll('.menu__link[data-goto]');
console.log(links);
if(links.length>0){
    links.forEach(link => {
        link.addEventListener('click', chmo)
    })
    function chmo(event){
        const clickTarget = event.target;
        console.log(clickTarget.dataset.goto);
        console.log(document.querySelector(clickTarget.dataset.goto)) 
        if(clickTarget.dataset.goto && document.querySelector(clickTarget.dataset.goto)){
            console.log(1);
            let element = document.querySelector(clickTarget.dataset.goto);
            let scrolling = element.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: scrolling,
                behavior: "smooth",
            }) 
            event.preventDefault();
            document.documentElement.classList.remove("burgered");
        }
        
    }
}
const sublinks = document.querySelectorAll(".menu__sublink[data-goto]");
if(sublinks.length>0){
    sublinks.forEach(sublink => {
        sublink.addEventListener('click', function(event){
            const clicked = event.target;
            if(clicked.dataset.goto && document.querySelector(clicked.dataset.goto)){
                let element = document.querySelector(clicked.dataset.goto);
                let scrolling = element.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: scrolling,
                    behavior: "smooth"
                })
                document.documentElement.classList.remove("burgered");
                event.preventDefault();
            }
        })
    })
}