import './basket';

//скрытие меню в адаптиве


const navClose = document.querySelector('.nav_menu_close_button');
const navMenu = document.querySelector('.nav_menu');
const navTog = document.querySelector('.nav_menu_toggle_botton');

if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.style.right = '-100%';
    });
}
if (navTog) {
    navTog.addEventListener('click', ()=>{
        navMenu.style.right = '0';
    });
}

// //При нажатии кнопок меню закрывается и перекидывается в нужное место
const navLink = document.querySelectorAll('.nav_menu_list_item');
const clickLink = () =>{
      navMenu.style.right = '-100%';
      }
navLink.forEach(el => el.addEventListener('click', clickLink));



//появление фона меню при скролле
const header = document.querySelector('.header');
const bgr =document.querySelector('shadow');
window.addEventListener('scroll' , ()=> {
    //header.classList.toggle(bgr, window.scrollY > 80);
    if (window.scrollY > 80) {
        header.style.background = '#111315';
        header.style.transition = '0.4s';
        //header.classList.add('shadow');
    }else{
        header.style.background = 'none';
    }
});


// //Всплывающее скидка
const sale = document.querySelector('.sale');
const saleClose = document.querySelector('.sale_cont_close');
saleClose.addEventListener('click', ()=>{
        sale.style.display = 'none';
});
setTimeout(()=>{
    sale.style.display = 'flex';
    
}, 15000);

//телефонный звонок
const call = document.querySelector('.call');
const pageHeight = document.body.scrollHeight;
//console.log(pageHeight);
window.addEventListener('scroll', ()=>{
    if (window.scrollY > pageHeight - 1000) {

        call.style.display = 'flex';
    }
    if (window.scrollY < 80) {
        call.style.display = 'none';
    }
});


//плавный скролл по сайту
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault(); //стопим все действия на сайте

        let href = this.getAttribute('href').substring(1); // получаем название атрибута на который нажали
        

        const scrollTarget = document.getElementById(href); // получаем атрибуд в жс

        const topOffset = document.querySelector('.nav').offsetHeight; // получаем высоту nav
        
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top; //получаем координаты по Y на котором находится id 
        const offsetPosition = elementPosition - topOffset; //из координат вычитаем высоту nav тем самым делаем отсуп вверх

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });// двигаемся до id 
    });
});


//
const scrollWW = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    //reset: true, // 
});

scrollWW.reveal(`.home_cont_data, .history_cont_data, .visit_content`);
scrollWW.reveal('.home_cont_data_img, .history_img, .footer_cont_img1', {rotate: {z: -15}})
scrollWW.reveal('.home_img, .footer_cont_img2', {rotate: {z: 15}})
scrollWW.reveal('.home_footer', {scale: 1, origin: 'bottom'})


scrollWW.reveal('.news_card:nth-child(1) img', {rotate: {z: -30, distance: 0}})
scrollWW.reveal('.news_card:nth-child(2) img', {rotate: {z: 20, distance: 0, delay: 600}})
scrollWW.reveal('.news_card:nth-child(3) img', {rotate: {z: -30, distance: 0, delay: 900}})

scrollWW.reveal('.menu_card', {interval: 100, scale: 1.05, origin: 'top', distance: 0, delay: 100})

scrollWW.reveal('.footer_cont', {scale: 1 })








