var button=document.getElementById('submit');
var first=document.getElementById('first-state');
var second=document.getElementById('second-state');
var image=document.getElementById('star');
var option1=document.getElementById('grey1');
var option2=document.getElementById('grey2');
var option3=document.getElementById('grey3');
var option4=document.getElementById('grey4');
var option5=document.getElementById('grey5');
const all=document.querySelectorAll('.opt');
const rate=document.getElementById('rating');


let choosen=0;
option1.addEventListener('click',function(){
    option1.style.backgroundColor='#fc7613';
    option1.addEventListener('click',function(){
        option1.style.backgroundColor='#262f38';
        choosen=0;
    })
    
})
option2.addEventListener('click',function(){
    option2.style.backgroundColor='#fc7613';
    option2.addEventListener('click',function(){
        option2.style.backgroundColor='#262f38';
        choosen=0;
    })
})
option3.addEventListener('click',function(){
    option3.style.backgroundColor='#fc7613';
    option3.addEventListener('click',function(){
        option3.style.backgroundColor='#262f38';
        choosen=0;
    })
})
option4.addEventListener('click',function(){
    option4.style.backgroundColor='#fc7613';
    option4.addEventListener('click',function(){
        option4.style.backgroundColor='#262f38';
        choosen=0;
    })
})
option5.addEventListener('click',function(){
    option5.style.backgroundColor='#fc7613';
    option5.addEventListener('click',function(){
        option5.style.backgroundColor='#262f38';
        choosen=0;
    })
})
    

all.forEach(bt=>{
    bt.addEventListener('click',(e)=>{
        choosen=e.target.innerHTML;
        
    })
})

button.addEventListener('click',function(){
    first.style.display='none';
    second.style.display='flex';
    image.style.display='none'; 
    rate.innerHTML=choosen;


})