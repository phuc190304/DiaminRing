
const btnBanner = document.getElementById('bannerBtn');
const banner = document.querySelector('.form__mobile');
const turnOff = document.querySelector('.form__mobile-close')
const Overplay = document.querySelector('.overplay');
const coutdown = document.querySelector('.container4__top-bottom-item');

btnBanner.addEventListener('click', () => {
    banner.style.display = 'block';
    Overplay.style.display ='block';
})

turnOff.addEventListener('click', () => {
    banner.style.display = 'none';
    Overplay.style.display ='none';
})

Overplay.addEventListener('click', () => {
    banner.style.display = 'none';
    Overplay.style.display ='none';
})

coutdown.addEventListener('click', () => {
    banner.style.display = 'block';
    Overplay.style.display ='block';
})


