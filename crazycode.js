// let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".nav-links li a");
// let headtitle = document.querySelector("a.blog");
// let cursorEye = document.querySelector(".eye");

// window.addEventListener('mousemove',cursor);

// function cursor(e){
//   mouseCursor.style.top = e.pageY +"px";
//   mouseCursor.style.left = e.pageX +"px";
// }

// navLinks.forEach(link => {
//   link.addEventListener('mouseover',() =>{
//     mouseCursor.classList.add('link-mouse')
//     link.classList.add("hover-link");
//   });
//   link.addEventListener('mouseleave',() =>{
//     mouseCursor.classList.remove('link-mouse')
//     link.classList.remove("hover-link");
//   });
// });

// headtitle.addEventListener('mouseover',() =>{
//   headtitle.classList.add('glitch');
//   mouseCursor.classList.add('cursor-eye');
//   cursorEye.classList.add('showEye');
// });
// headtitle.addEventListener('mouseleave',() =>{
//   headtitle.classList.remove('glitch');
//   mouseCursor.classList.remove('cursor-eye');
//   cursorEye.classList.remove('showEye');
// });

// Animations

gsap.registerPlugin(ScrollTrigger);

gsap.from('.notros-screen',{
  scrollTrigger: {
    trigger: '.notros',
    start: "top center",
    end:"center center",
    toggleActions:"restart pause reverse pause",
    // markers: true,
    scrub: true,
  },
  x: 200,
  opacity: 0,
});


gsap.from('.notros',{
  scrollTrigger: {
    trigger: '.what',
    start: "top bottom",
    end:"top top",
    toggleActions:"restart pause reverse pause",
    // markers: true,
    scrub: true,
  },
  y: 200,
  opacity: 0.7,
});

gsap.from('.mck',{
  scrollTrigger: {
    trigger: '.notros',
    start: "bottom bottom",
    end:"bottom center",
    toggleActions:"restart pause reverse pause",
    // markers: true,
    scrub: true,
  },
  y: 200,
  opacity: 0.7,
});
// let sections = gsap.utils.toArray(".brief-container");

// gsap.to(sections, {
//   yPercent: -100 * (sections.length -1),
//   ease: "none",
//   scrollTrigger:{
//     trigger: ".what",
//     pin: true,
//     scrub: 1,
//     snap: 1/ (sections.length -1),
//     end: () => "+=" + 
//     document.querySelector(".projects").offsetHeight
//   }
// });