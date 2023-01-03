const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav_ul')
const boxImg = document.querySelector('.box_photo')
const wrapTitle = document.querySelector('.wrapTitle')
const mainFrozzen = document.querySelector('.main_frozzen')
const header = document.getElementById('header_fixed')
const btnHome = document.getElementById('btn_home')
const boiteCapacity = document.getElementById('boiteCapacity')

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


btnHome.addEventListener('click', () => {
    boiteCapacity.classList.toggle('isVisible')
})

navUl.addEventListener('click', () =>{
    hamburger.classList.remove("open")
    navUl.classList.remove("slide")
    mainFrozzen.classList.remove("frozzen")
    document.body.classList.remove("noscroll");

})


// function pagebar()
// {
//   var links=document.getElementById('navbar').getElementsByTagName("a");
//   var current = location.href;
//   for (var i=0; i < links.length; i++)
//   {
//    if(links[i].href == current)
//    {
//     links[i].style.color ='blue';
//       links[i].href = "";
      
//    }
//  }
// } 