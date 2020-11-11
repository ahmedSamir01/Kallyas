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
    
    
    // handeling popup

    $(".portfolio .overlay").each((index, pic) => {
        
         pic.onclick = function () {
             
             let over = document.createElement('div');
             over.className = 'popup-over';
             document.body.appendChild(over);
             
             // create popup
             let popBox = document.createElement('div');
             popBox.className = 'popup';
             
             let close = document.createElement("span");
             let x = document.createTextNode("x");
             
             close.appendChild(x);
             close.className = 'close';
             popBox.appendChild(close);
             

             // create img
             let popImg = document.createElement('img');

             popImg.src = pic.previousSibling.src;
             
             popBox.appendChild(popImg);
             document.body.appendChild(popBox);
             
         }
        
    });
    
    document.addEventListener("click", function(e) {
         
        if (e.target.className == "close") {
            
            e.target.parentElement.remove();
            $(".popup-over").remove();
        }
        if (e.target.className == "popup-over") {
            
            $(".popup").remove();
            e.target.remove();
            
        }
        
    }); 
    
    
    
    $("nav ul li a").on("click", function () {

        $(".navbar-collapse").removeClass("show");
        $("body, html").animate({
           
            scrollTop: $("." + $(this).data('scroll')).offset().top
            
        }, 1000);

        
    });

    $(".navbar-collapse").on("click", (e) => {e.stopPropagation()});
    
    // close when click somewhere
    $(document).bind("click", function(e) {
        if ($(".navbar-collapse").hasClass("show") && e.target !== document.querySelector(".show") && e.target !== document.querySelector(".navbar-toggler")) {$(".navbar-toggler").click()}
    });
    
});

























   