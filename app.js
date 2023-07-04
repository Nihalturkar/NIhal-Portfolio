
function greet() {
document.querySelector(".loader").style.top = "-100%"
document.querySelector(".loader").style.transition = ""
}

setTimeout(greet, 2000);

// ======================================

 var flag=0;

document.querySelector(".switch").addEventListener("click",function(){
    if (flag === 0){
        document.documentElement.style.setProperty('--main-color', '#000');
        document.documentElement.style.setProperty('--font-color', '#fff');
        flag=1;
    }
    else{
        document.documentElement.style.setProperty( '--main-color');

        flag = 0;
    }
})



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

gsap.from(".showcase-img", {
    opacity:0,
    x:"50%",
    duration:1.1
  
  });
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


// for certificates
$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });

