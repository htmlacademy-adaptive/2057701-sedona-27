let mainNavigationToggle = document.querySelector('.main-nav__toggle');
let mainNavigation = document.querySelector('.main-nav');
let mainHeaderLogo = document.querySelector('.main-header__logo');
let mainHeader = document.querySelector('.main-header');
let hearts = document.querySelectorAll('.photo__item-likes');

mainHeader.style.minHeight = "56px";
mainHeaderLogo.style.top = "0";
mainNavigationToggle.style.display = "block";
mainNavigation.classList.remove('main-nav--active');
mainNavigationToggle.onclick = function () {
  mainNavigation.classList.toggle('main-nav--active');
};
for (let heart of hearts) {
  heart.onclick = function () {
    if (heart.classList.contains('photo__item-liked')) {
      heart.textContent--;
    } else {
      heart.textContent++;
    }
    heart.classList.toggle('photo__item-liked');
  };
}