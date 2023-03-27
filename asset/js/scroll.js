const container1 = document.getElementById('animation1')
const container3 = document.getElementById('animation3')
const container4 = document.getElementById('animation4')
const container5 = document.getElementById('animation5')
const container6 = document.getElementById('animation6')
const container7 = document.getElementById('animation7')

window.addEventListener('scroll', () => {
  if (window.scrollY >= 300) {
    container1.classList.add('scroll')
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 300) {
    container3.classList.add('scroll')
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1000) {
    container4.classList.add('scroll')
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1000) {
    container5.classList.add('scroll')
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1000) {
    container6.classList.add('scroll')
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1900) {
    container7.classList.add('scroll')
  } else {
    container7.classList.remove('scroll')
  }
})
