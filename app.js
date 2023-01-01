

const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav_ul')
const boxImg = document.querySelector('.box_photo')
const wrapTitle = document.querySelector('.wrapTitle')
const mainFrozzen = document.querySelector('.main_frozzen')
const header = document.getElementById('header')

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle("open")
//     navUl.classList.toggle("slide")
//     mainFrozzen.classList.toggle("frozzen")
// })

hamburger.addEventListener('click', () => {

        if(!hamburger.classList.contains("open")){
            hamburger.classList.add("open")
            navUl.classList.add("slide")
            mainFrozzen.classList.add("frozzen")
            document.body.classList.add("noscroll");
        } else if (hamburger.classList.contains("open")){
        hamburger.classList.remove("open")
        navUl.classList.remove("slide")
        mainFrozzen.classList.remove("frozzen")
        document.body.classList.remove("noscroll");
    }
})

document.addEventListener('click', (e) => {
    if(!header.contains(e.target)){
        hamburger.classList.remove("open")
        navUl.classList.remove("slide")
        mainFrozzen.classList.remove("frozzen")
        document.body.classList.remove("noscroll");
    }
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

