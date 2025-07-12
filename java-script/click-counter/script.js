const plusButton= document.querySelector('.plus-btn')
const minusButton=document.querySelector('.minus-btn')
const resetButton=document.querySelector('.reset-btn') 
let display=document.getElementById('display')

let count= 0;

  plusButton.addEventListener('click',()=>{
  count++;
  display.textContent=count;
})




minusButton.addEventListener('click',()=>{
  count--;
  display.textContent=count;

})

resetButton.addEventListener('click',()=>{
  count=0;
  display.textContent=0;
})