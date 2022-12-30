

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

function ulResize(){
    if(window.innerWidth > 800){
        if(hamburger.classList.contains("open")){
            hamburger.classList.remove("open")
            navUl.classList.remove("slide")
            mainFrozzen.classList.remove("frozzen")
        }
    }
}

window.addEventListener('resize', ulResize)

