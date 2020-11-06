// pop up zaloguj się

const btnLog = document.querySelector('#btnLog');
const btnLogMobile = document.querySelector('#btnLogMobile');
const hideModal = document.querySelector('.c-modal__hide');

btnLog.addEventListener("click", function() {
    document.querySelector('.c-modal').classList.add('u-active');
    document.querySelector('.c-modal__wrap').classList.add('u-active');
    document.querySelector('header').classList.add('u-blur');
});
btnLogMobile.addEventListener("click", function() {
    document.querySelector('.c-modal').classList.add('u-active');
    document.querySelector('.c-modal__wrap').classList.add('u-active');
    document.querySelector('header').classList.add('u-blur');
});
hideModal.addEventListener("click", function() {
    document.querySelector('.c-modal').classList.remove('u-active');
    document.querySelector('.c-modal__wrap').classList.remove('u-active');
    document.querySelector('header').classList.remove('u-blur');
});

// nested menu

const btnNestedMenu = document.querySelector('#btnNestedMenu');

btnNestedMenu.addEventListener("click", function() {
    document.querySelector('.c-menu-main__nested').classList.toggle('display-block');
});

