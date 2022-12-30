

const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav_ul')
const boxImg = document.querySelector('.box_photo')
const wrapTitle = document.querySelector('.wrapTitle')
const mainFrozzen = document.querySelector('.main_frozzen')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("open")
    navUl.classList.toggle("slide")
    mainFrozzen.classList.toggle("frozzen")

})

