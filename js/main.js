$(document).ready(function(){
   

    //If the window is scrolled, call this function
    $(window).scroll(function(){
        let currentScrollTop = $(this).scrollTop();
        console.log(currentScrollTop);

        if (currentScrollTop > 1){
            $("#top-nav").addClass("scroll-active");
        }
        else{
            $("#top-nav").removeClass("scroll-active");
        }

      
        $("#line-a").css("transform", "translateX(" + (currentScrollTop*2) +"px) rotate(" + currentScrollTop*2 + "deg)");
    });

});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

  }
  
  window.addEventListener("scroll", reveal);