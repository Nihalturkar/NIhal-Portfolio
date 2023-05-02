


$(document).ready(function () {

    $(window).scroll(function () {

        if (this.scrollY > 200) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }      
    })
});

// ==========================================
var typed = new Typed(".typing-1", {
    strings: [
        "Frontend developer", "UI developer", "Python developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: [
        "Frontend,developer", "UI developer", "Python developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

//slide-up script

function slideCircle() {
    document.querySelectorAll(".project")
        .forEach(function (slide) {
            slide.addEventListener("mousemove", function (dets) {
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(10% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`;
            });

            slide.addEventListener("mouseleave", function (dets) {
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`;
            });
        })
}
slideCircle();

function slidesSkewMaker() {
    var dim = document.querySelector(".box")
        .getBoundingClientRect();

    var prev = dim.left;

    document.querySelector(".box")
        .addEventListener("scroll", function () {
            var dim2 = document.querySelector(".project")
                .getBoundingClientRect();
            var diff = prev - dim2.left;
            document.querySelectorAll(".project")
                .forEach(function (elem) {
                    elem.style.transform = `skewX(${diff * .1}deg)`;
                });
            prev = dim2.left;
        })
}
slidesSkewMaker();

// Gsap and ScrollTrigger


gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({})

gsap.from(".about .about-content .column", {
    opacity:0,
    scale:0,
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%",
      end: "top 15%",
      scrub: true
    }
  });
  gsap.from(".services .service-content .main", {
    x:0,
    scale:0,
    stagger:1,
    scrollTrigger: {
      trigger: ".main",
      start: "top 90%",
      end: "top 70%",
      scrub: true,
      marker:true
    }
  });
  gsap.from(".skills .skill-content.column right .bars", {
    y:0,
    stagger:1,
    scrollTrigger: {
      trigger: ".bars",
      start: "top 70%",
      end: "top 50%",
      scrub: true,
      marker:true
    }
  });

//   for list block and none

var menu = document.querySelector("#click");
var close = document.querySelector("#close")
var li = document.querySelector(".list");

menu.addEventListener("click",function(){
    li.style.display= "flex"
    menu.style.display="none"
    close.style.display="flex"
})
close.addEventListener("click",function(){
    li.style.display= "none"
    menu.style.display="flex"
    close.style.display="none"
})

