//Иконка корзины
const basketIcon = document.querySelector('.basket');
const basketPopup = document.querySelector('.basket_popup');
//кнопка добавления
const cardButton = document.querySelectorAll('.menu_card_button_i');

const card = document.querySelectorAll('.menu_card');
const cardImage = document.querySelectorAll('.menu_card_img');
console.log(cardImage);
const cardTitle = document.querySelectorAll('.menu_card_data_title');
const cardSubtitle = document.querySelectorAll('.menu_card_data_subtitle');
const cardPrice = document.querySelectorAll('.menu_card_data_price');
const basketClose = document.querySelector('.basket_cont_close');

//Карточка товара
const cardLi = document.querySelectorAll('.basket_cont_list_item');
//счетчик количества товара в заказе
const basketCount = document.querySelector('.basket_icon_count');
const basketDelete = document.querySelectorAll('.basket_cont_list_item_delete');
const basketAllPrice = document.querySelector('.basket_cont_all_price_number');
let count = 1;

let mass = [];


basketIcon.addEventListener('click', ()=>{
    basketPopup.classList.toggle('active');
});
basketClose.addEventListener('click', ()=>{
    basketPopup.classList.remove('active');
});

//попытка сделать корзину
(function GetCard() {
    for (let i = 0; i < cardButton.length; i++) {
        cardButton[i].addEventListener('click', ()=>{
            basketIcon.classList.add('active');
            count++;
            mass.push({
                card: count, 
                image: cardImage[i].src, 
                title: cardTitle[i].textContent, 
                subtitle: cardSubtitle[i].textContent, 
                price: cardPrice[i].textContent
            });
            window.localStorage.setItem('test', JSON.stringify(mass));
            const parseLocal =  JSON.parse(window.localStorage.getItem('test', mass));
            //console.log(parseLocal);

            let li = document.querySelector('.basket_cont_list');
            let liContent =  li.insertAdjacentHTML('beforeend', `
            <li class="basket_cont_list_item">
          <div style="display: flex; flex-direction: row; align-items: center; gap: 1rem;">
          <img class="basket_cont_list_item_img" src="${cardImage[i].src}" alt="image" width="100">
          <div>
            <h2 class="basket_cont_list_item_title">${cardTitle[i].textContent}</h2>
            <p class="basket_cont_list_item_subtitle">${cardSubtitle[i].textContent}</p>
          </div>
          </div>
          <div style="display: flex; flex-direction: row; align-items: center; gap: 1rem;">
          <span class="basket_cont_list_item_price">${cardPrice[i].textContent}</span>
          <img class="basket_cont_list_item_delete" src="./public/icon/мусор.png">
        </div>
        </li>`);
        
        window.localStorage.setItem('test', JSON.stringify(mass));
        
        

        // window.localStorage.setItem


        basketCount.textContent =  parseLocal.length;
        basketAllPrice.textContent = `${Allprice()} рублей`;
        
        
        });
    
        
    }

})();

function Allprice(){
    const parseLocal =  JSON.parse(window.localStorage.getItem('test', mass));
   
    
    let sumAllPrice = 0;
    parseLocal.forEach(el => {
        sumAllPrice += Number(el.price.split(' ')[0]);
        
    });
    console.log(sumAllPrice);
     return sumAllPrice;
};





