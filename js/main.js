$(document).ready(function(){
    $(".pop").owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:true
            }
        }
    });
  });

  $(document).ready(function(){
    $("  .cat").owlCarousel({
        loop:true,
        margin:40,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:false,
                loop:true
            }
        }
    });
  });



//   var a = Document.getElementById('toogle');
  
function abc() {
    var menutoggle = document.querySelector(".left");
    menutoggle.classList.toggle("active");
            
    // var navigation = document.querySelector(".navigation");
    // navigation.classList.toggle("active");
  }