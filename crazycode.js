let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li a");
let headtitle = document.querySelector("a.blog");
let cursorEye = document.querySelector(".eye");

window.addEventListener('mousemove',cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY +"px";
  mouseCursor.style.left = e.pageX +"px";
}

navLinks.forEach(link => {
  link.addEventListener('mouseover',() =>{
    mouseCursor.classList.add('link-mouse')
    link.classList.add("hover-link");
  });
  link.addEventListener('mouseleave',() =>{
    mouseCursor.classList.remove('link-mouse')
    link.classList.remove("hover-link");
  });
});

headtitle.addEventListener('mouseover',() =>{
  headtitle.classList.add('glitch');
  mouseCursor.classList.add('cursor-eye');
  cursorEye.classList.add('showEye');
});
headtitle.addEventListener('mouseleave',() =>{
  headtitle.classList.remove('glitch');
  mouseCursor.classList.remove('cursor-eye');
  cursorEye.classList.remove('showEye');
});

// Animations

// fondo 2B153C al body cuando se entra en algun proyecto
gsap.registerPlugin(ScrollTrigger);
// const what = document.querySelector(".what")

// ScrollTrigger.create({
//   trigger:'.notros',
//   toggleClass: 'dark-bg',
//   start: "top center",
//   end:"center center",
//   markers: true,
//   onEnter:()=> what.classList.add("dark-bg"),
//   onLeave:()=> what.classList.remove("dark-bg"),

// })


// gsap.from('.what',{
//   scrollTrigger: {
//     trigger: '.notros',
//     start: "top center",
//     end:"center center",
//     // toggleActions:"restart pause reverse pause",
//     markers: true,
    
//     scrub: true,
//   },

//   toggleClass:'dark-bg',

// });