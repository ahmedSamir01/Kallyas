/*global console, $*/

$(function () {
    
    "use strict";
    
    new WOW({mobile:!1}).init();
    $(window).on("scroll load", _ => {
       
        if ($(this).scrollTop() > 1000) {
            
            $(".chevron").fadeIn(700);
            
        } else {
            
            $(".chevron").fadeOut(700);
        }
        
    });
    
    
    
    document.addEventListener("click", function(e) {
         
        if (e.target.className == "close") {
            
            e.target.parentElement.remove();
            document.querySelector(".popup-over").remove();
        }
        if (e.target.className == "popup-over") {
            
            document.querySelector(".popup").remove();
            e.target.remove();
            
        }
        
    });   
    
    $(".chevron").on("click", function () {
        
        $("body, html").animate({
           
            scrollTop: 0
            
        }, 1000);
        
    });
    
    
    $("nav ul li").on("click", function () {

        $(".navbar-collapse").removeClass("show");
        $("body, html").animate({
           
            scrollTop: $("." + $(this).children().data('scroll')).offset().top
            
        }, 1000);

        
    });

    
});

























   