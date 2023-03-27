const bars = document.querySelector('.header__mobile');
const bars2 = document.querySelector('.header__nav-mobile-main');
const playout = document.querySelector('.overplay');


bars.addEventListener('click', () => {
    if(bars2.style.display == 'none'){
        bars2.style.display = 'block';
        bars.classList.add('open');
        playout.classList.add('open')
    }
    else{
        bars2.style.display = 'none';
        bars.classList.remove('open');
        playout.classList.remove('open')
    }
})

playout.addEventListener('click', () => {
    if(bars2.style.display == 'block') {
        bars2.style.display = 'none'-
        playout.classList.remove('open')
    } 
})
