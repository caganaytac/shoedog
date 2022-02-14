const menu = document.querySelector('.menu'),
    close = document.querySelector('.close'),
    nav = document.querySelector('nav');
menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
});

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})