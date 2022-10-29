var hamburger = document.querySelector(".hamburger");
var bar = document.querySelector(".bar");
var navLink = document.querySelector(".nav_link");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
  navLink.classList.toggle("height_auto");
});


const faqs = document.querySelectorAll(".faq"); 

faqs.forEach( (faq) => {
  faq.addEventListener("click",() =>{
  faq.classList.toggle("achsd");
  })
});



// (function($){
// 	$(function(){



//         // Phone nav click function
//         $('.hamburger').click(function () {
//             $("body").toggleClass("navShown");
//             $(".nav-wrap").;