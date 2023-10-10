const modes = document.getElementById('modes')
modes.addEventListener('click',()=>{
    if (modes.classList.contains('sun')){
        modes.innerHTML = '<i class="ri-sun-line"></i>'
        var root = document.querySelector(":root");
        root.style.setProperty('--main', '#252B33');
        root.style.setProperty('--black', '#fff');
        root.style.setProperty('--dark_main', '#3e4752');
        root.style.setProperty('--hero_lgrad', '#252B33');
        root.style.setProperty('--btn_shadow', '#44494E');
        modes.classList.remove('sun')
    }
    else{
        modes.innerHTML = '<i class="ri-moon-line"></i>'
        var root = document.querySelector(":root");
        root.style.setProperty('--main', '#F0EBE3');
        root.style.setProperty('--black', '#000');
        root.style.setProperty('--dark_main', '#F0EBE3');
        root.style.setProperty('--btn_shadow', '#CBCAC9');
        root.style.setProperty('--hero_lgrad', 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(240,235,227,1) 100%)');
        modes.classList.add('sun')
    }

})
const menu_btn = document.getElementById('menu');
const menu =  document.querySelector('.side_container');
menu_btn.addEventListener('click', (e)=>{
    if (menu.style.display == "none"){
        menu.style.display = "block"
    }
    else{
        menu.style.display = "none"
        
    }
})


const showcase = document.querySelector('.showcase')
const header = document.querySelector('.header')
const header_observer = new IntersectionObserver(entries=>{
    header.classList.toggle("sticky", (!entries[0].isIntersecting))
},{rootMargin:"0px"})


header_observer.observe(showcase)


const small_nav_btn = document.querySelector('.pages p');
const small_nav = document.querySelector('.pages ul');

small_nav_btn.addEventListener('click',()=>{
     if (small_nav.style.display == "none"){
        small_nav.style.display = "block"
     }
     else{
        small_nav.style.display = "none"
     }
})