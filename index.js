const menuBtn = document.querySelector('.navbar-toggler')
const navBar = document.querySelector('.navbar');
const blurbg = document.querySelector('.blurBg');
const bdy = document.querySelector('body');
menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    blurbg.classList.toggle('active');
})

blurbg.addEventListener('click', () => {
    // navBar.classList.remove('active');
    // blurbg.classList.remove('active');
    alert("clcik")

})