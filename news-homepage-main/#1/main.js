function toogleMenu () {
    const head = document.querySelector('.head');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        head.classList.toggle('open');
    })
    
}
toogleMenu();