// trigger nice scroll
$(window).on("load", function() {
    
    setTimeout(function () {
        $("html").niceScroll({

            cursorborder: 0,
            cursorborderradius: '25px',
            cursorwidth: '7px',
            cursorcolor: '#dc3545',
            cursorfixedheight: 120,
            zindex:'99999999'


        });
    }, 500);
});    

//trigger mixer

$("#container").mixItUp();
    
    
    
    
    
    
    
    
    
    