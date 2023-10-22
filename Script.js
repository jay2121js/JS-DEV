const modes = document.getElementById('modes')
modes.addEventListener('click',()=>{
    if (modes.classList.contains('sun')){
        modes.innerHTML = '<i class="ri-sun-line"></i>'
        var root = document.querySelector(":root");
        root.style.setProperty('--main', '#252B33');
        root.style.setProperty('--black', '#fff');
        root.style.setProperty('--bw_border', '#000');
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
        root.style.setProperty('--bw_border', '#fff');
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


const wrapper = document.querySelector('.service_card_container');
let pressed = false;
let startx = 0;
wrapper.addEventListener('mousedown', function(e){
    pressed = true;
    startx = e.clientX;
    this.style.cursor = "grabbing";
})
wrapper.addEventListener('mouseup', function(e){
    pressed = false;
    this.style.cursor = "grab";
})
wrapper.addEventListener('mouseleave', function(e){
    pressed = false;
    this.style.cursor = "grab";
})
wrapper.addEventListener('mousemove', function(e){
    if (!pressed){
        return
    }
    this.scrollLeft += startx - e.clientX;
})
let  https = new XMLHttpRequest();
https.open('get','slider.json',true);
https.send();
https.onload = show;
var start = 0;
var count = 5;
function show(){
if (https.readyState==4 && https.status==200){
    const card_container = document.querySelector('.service_card_container');
    const card_list = JSON.parse(https.responseText);
    card_list.forEach(function(temp, i){
         if(i>= start && i<count){
            const card_container = document.querySelector('.service_card_container');
            const new_card = document.createElement("div");
            new_card.classList+= `card ${i}`;
            new_card.innerHTML+= `<h1 class="title">${temp.title}</h1>
                            <p class="sub_title">${temp.sub_title}</p>
                            <p class="card_main">${temp.subtext}</p>
                            <div class="see_pricing"> <p>See Pricing</p><i class="ri-arrow-right-line"></i></div>
                            `
            card_container.appendChild(new_card)
         }
    })
    if (!(count >=  card_list.length)){
    const cards = document.querySelectorAll('.card'); 
    const lastCard = cards[cards.length - 1];
    lastobserver.observe(lastCard); 
    start  = count;
    count+=5;
    } 
    if (!(count >=  card_list.length + 5)){
        const cards = document.querySelectorAll('.card'); 
        cards.forEach(c=>{
        card_observer.observe(c); 
        })
    }
}
}
const lastobserver = new IntersectionObserver(entries => {
const lastcard = entries[0];
if (lastcard.isIntersecting){
    const card_container = document.querySelector('.service_card_container');
    const loader = document.createElement("div");
    loader.classList+= "loader";
    loader.innerHTML+= "<span></span><span></span><span></span><span></span><p>Loading....</p>"
    card_container.appendChild(loader)
    setTimeout(()=>{loader.remove()},3000)
    setTimeout(show,3000)
    lastobserver.disconnect()
}
},{threshold:.5});

const  card_observer = new IntersectionObserver(entries=>{
entries.forEach(element=>{
    element.target.classList.toggle('show',element.isIntersecting)
})
},{threshold:0.5}) 
