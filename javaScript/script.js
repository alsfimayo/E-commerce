/*index.html */
const openNav=document.querySelector('#open');
const nav=document.querySelector('.nav-list');
const closeNav=document.querySelector('#close');


openNav.addEventListener('click',()=>{
    nav.classList.add('active');
    closeNav.style.display='flex';
    openNav.style.display='none';

    
})
closeNav.addEventListener('click',()=>{
    nav.classList.remove('active');
    openNav.style.display='flex';
    closeNav.style.display='none'
})

/*shop.html*/

const Main=document.querySelector('.main-img');
const Small=document.querySelectorAll('.small-img');
Small.forEach((img) => {
 img.addEventListener('click',()=>{
     Main.src=img.src;
 });
 
});
const Btn=document.querySelector('.contact-btn');
Btn.addEventListener('click',()=>{
    alert('Congratulation')
});