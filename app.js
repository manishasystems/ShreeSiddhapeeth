
let Mainbody = document.getElementById("body");


// mobile box
let mobile_box = document.getElementById("mobile_box");
let mobileboxstatus = true;
let option_btn = document.getElementById("option_btn");

option_btn.addEventListener("click",()=>{
  if(mobileboxstatus){
    mobile_box.style.display = "flex";
    mobileboxstatus = false;
  }
  else {
    mobile_box.style.display = "none";
    mobileboxstatus = true;
  }
});





// ACCORDIAN 
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}