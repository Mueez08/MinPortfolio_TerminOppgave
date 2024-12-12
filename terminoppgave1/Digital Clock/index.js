const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

updateclock();
function updateclock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
let a = "AM"; 

if (h > 12){
 a = "PM";

}

/*
if(h < 10){
h = "0" + h;
} 
*/

 /*  if(h < 10){
    h = "0" + h;
  } */

// Conditional Operator Eller Ternary Operator
 h = h < 10 ? "0" + h : h;
 m = m  < 10 ? "0" + m : m;
 s = s < 10 ? "0" + s : s;
ampmEl.innerText = a;



// event 
/*
  if(m < 10){
    m = "0" + m;
  }

  if(s < 10){
    s = "0" + s;
  }
  */
  
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  setTimeout(() => {
    updateclock();
  }, 1000);
    
 


}  