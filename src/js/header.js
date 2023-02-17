const burgerMenuOpen = document.querySelector('[data-burger-menu-open]');
const burgerMenuClose = document.querySelector('[data-burger-menu-close]');

burgerMenuOpen.addEventListener('click', onClickBurger);

const onClickBurger = () => {
  console.log(burgerMenuOpen);
};
