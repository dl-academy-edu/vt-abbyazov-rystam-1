var popup = document.querySelector('.popup');
var overlay = document.querySelector('.popup__overlay');
var openPopupBtn = document.querySelector('.hero-btn-wrapper');
var closePopupBtn = popup.querySelector('.popup__close__btn');
var openClosePopup = function(){
    popup.classList.toggle('open');
    overlay.classList.toggle('open');
};

openPopupBtn.addEventListener('click', function(){
    openClosePopup();
}); 
closePopupBtn.addEventListener('click', function(){
    openClosePopup();
});