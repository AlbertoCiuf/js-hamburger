//APERTURA
const hambOpen = document.querySelector(".fa-bars");
const hambMenu = document.querySelector(".hamburger-menu");

hambOpen.addEventListener('click', function() {
  hambMenu.classList.add('active');
});

//CHIUSURA
const hambClose = document.querySelector(".fa-times");

hambClose.addEventListener('click', function() {
  hambMenu.classList.remove('active');
}); 