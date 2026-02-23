const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
const income=document.querySelector('#income');
const amount=parseInt(income.value);  
const result=document.querySelector('h2');
let TotalTax=0;
if(amount<=1200000)
   TotalTax=0;
   else if(amount<=1600000){
    TotalTax=(amount-1200000)*0.15;
   }
    else if(amount<=2000000){
        TotalTax=60000+(amount-1600000)*0.20;
    }
    else if(amount<=2400000){
        TotalTax=140000+(amount-2000000)*0.25;
    }
    else {
      TotalTax=240000+(amount-2400000)*0.30;
    }
result.textContent=`Total Tax: ${TotalTax}`;

});