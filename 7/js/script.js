let mainNavigationToggle = document.querySelector('.main-nav__toggle');
let mainNavigation = document.querySelector('.main-nav');
let mainHeaderLogo = document.querySelector('.main-header__logo');
let mainHeader = document.querySelector('.main-header');
let likes = document.querySelectorAll('.photo__item-likes');
let info = document.querySelector('.modal-info')
let buttonSuccess = document.querySelector('#success-button');
let submit = document.querySelector('#submit');
let form = document.querySelector('.form__container');
let error = document.querySelector('.modal-error');
let buttonError = document.querySelector('#error-button');
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let phoneNumber = document.querySelector('#phone-number');
let email = document.querySelector('#email');

mainHeader.style.minHeight = "56px";
mainHeaderLogo.style.top = "0";
mainNavigationToggle.style.display = "block";
mainNavigation.classList.remove('main-nav--active');
mainNavigationToggle.onclick = function () {
  mainNavigation.classList.toggle('main-nav--active');
};
for (let like of likes) {
  like.onclick = function () {
    if (like.classList.contains('photo__item-likes--added')) {
      like.textContent--;
    } else {
      like.textContent++;
    }
    like.classList.toggle('photo__item-likes--added');
  };
}

buttonSuccess.onclick = function () {
  info.classList.remove('modal-info--active');
}

buttonError.onclick = function () {
  error.classList.remove('modal-error--active');
}

form.onsubmit = function (evt) {
  evt.preventDefault();
  if (firstName.value === "" || lastName.value === "" || phoneNumber.value === "" || email.value === "") {
    error.classList.add('modal-error--active');
    firstName.classList.add('form__input--required');
    lastName.classList.add('form__input--required');
    phoneNumber.classList.add('form__input--required');
    email.classList.add('form__input--required');
    return false;
  } else {
    info.classList.add('modal-info--active');
    return true;
  }
}
