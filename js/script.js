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