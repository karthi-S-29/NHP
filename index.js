function showsidebar(){
    let nav_head2=document.querySelector('.nav_head2')
    nav_head2.style.display='flex';
    
}
function hidesidebar(){
    let nav_head2=document.querySelector('.nav_head2')
    nav_head2 .style.display='none';
}

function showsidebar1(){
    let xmark1=document.querySelector('.xmark1')
    xmark1.style.display='flex';
    let xmark2=document.querySelector('.xmark2')
    xmark2.style.display='none';
    
    
    
}
function hidesidebar1(){
    let xmark1=document.querySelector('.xmark1')
    xmark1 .style.display='none';
    let xmark2=document.querySelector('.xmark2')
    xmark2.style.display='block';
}

var loader=document.querySelector('.open_page');
 window.addEventListener("load",function(){
    
    loader .style.display='none';

 })