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

basketIcon.addEventListener('click', ()=>{
   basketPopup.style.display = 'flex';
    
    
    
});

(function GetCard() {
    for (let i = 0; i < cardButton.length; i++) {
        cardButton[i].addEventListener('click', ()=>{
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
          <img class="basket_cont_list_item_delete" src="./public/icon/tg.svg">
        </div>
        </li>`);
        window.localStorage.setItem('basket', 
        JSON.stringify(liContent));

           
        });
        
    }

})();





