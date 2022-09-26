 
 
 // ============== Menu  Humburger Toggle ====================

 const humburger = document.querySelector(".humburger");
 const navMenu = document.querySelector(".nav-menu");

 humburger.addEventListener("click", () => {
     humburger.classList.toggle("active");
     navMenu.classList.toggle("active");
 })

 document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
     humburger.classList.remove("active");
     navMenu.classList.remove("active");
 }
 )
 )


 // ================ New  EASY Accordion ====================

 const acc_btns = document.querySelectorAll(".accordion-header");
 const acc_contents = document.querySelectorAll(".accordion-body");

 acc_btns.forEach(btn => {
     btn.addEventListener("click", () => {

         /* acc_contents.forEach((acc) => {
              if (e.target.nextElementSibling !== acc && acc.classList.contains("active")) {
                  acc.classList.remove("active");
                  acc.btns.forEach((btn) => btn.classList.remove("active"));
              }
          });*/

         const panel = btn.nextElementSibling;
         panel.classList.toggle("active");
         btn.classList.toggle("active");
     });
 });


 // ==================   SWIPER JS   ==========================

 let restaurant = new Swiper(".card_slider", {
     spaceBetween: 20,
     loop: true,
     speed: 800,
     autoplay: {
         delay: 3000,
         disableOnInteraction: false,
     },
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
         // type: "progressbar",
     },
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
     breakpoints: {
         480: {
             slidesPerView: 1,
         },
         768: {
             slidesPerView: 2,
         },
         1200: {
             slidesPerView: 3,
         },
     },
 });

 // ==================   SCROLL REVEAL JS   ==========================

 const sr = ScrollReveal({
     reset: true,
     origin: "top",
     distance: "50px",
     duration: 2000,
     delay: 1000,
     scale: 0.8
 });
 sr.reveal('.accordion', { origin: "top", distance: "50px", easing: "linear", delay: 300 });
 sr.reveal('.grid-1', { origin: "bottom", distance: "70px", easing: "ease-in", interval: 100 });

 // ================== COPY PASTE ===========================

 const copyPaste = () => {
     let copyText = document.getElementById("myInput");
     copyText.select();
     copyText.setSelectionRange(0, 99999);
     navigator.clipboard.writeText(copyText.value);
 }

 // ================== CALCULATOR ===========================

 function dis(value) {
     document.getElementById("screen").value += value;
 }

 // function for evaluation
 function solve() {
     let x = document.getElementById("screen").value;
     let y = eval(x);
     document.getElementById("screen").value = y;
 }

 // function for clearing the screen
 function clr() {
     document.getElementById("screen").value = ""
 }

 // backspacing

 function backspace() {
     let screen = document.getElementById("screen").value;
     document.getElementById("screen").value = screen.substring(0, screen.length - 1);
 }

 var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  let switchCtn = document.querySelector('#switch-cnt')
  let switchC1= document.querySelector('#switch-c1')
  let switchC2= document.querySelector('#switch-c2')
  let switchCircle = document.querySelectorAll('.switch__circle')
  let switchBtn = document.querySelectorAll('.switch-btn')
  let aContainer = document.querySelector('#a-container')
  let bContainer = document.querySelector('#b-container')
  let allButtons = document.querySelectorAll('.form-submit')


  let getButtons = (e) => e.preventDefault()


  let changeForm = (e) => {
    switchCtn.classList.add('is-gx')
    setTimeout(function (){
        switchCtn.classList.remove('is-gx')
    },1500)

    switchCtn.classList.toggle('is-txr')
    switchCircle[0].classList.toggle('is-txr')
    switchCircle[1].classList.toggle('is-txr')

    switchC1.classList.toggle('is-hidden')
    switchC2.classList.toggle('is-hidden')
    aContainer.classList.toggle('is-txl')
    bContainer.classList.toggle('is-txl')
    bContainer.classList.toggle('is-z200')
  }

  let mainF = (e) => {
      for(let i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener('click', getButtons)
        for(let i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener('click', changeForm)   
  }

  window.addEventListener('load',mainF)