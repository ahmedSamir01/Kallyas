// trigger nice scroll

$(window).on("load", function() {

    
    let minLg = window.matchMedia("(min-width: 992px)");

    if (minLg.matches) {

        setTimeout(function () {
            $("body").niceScroll({

            cursorborder: 0,
            cursorborderradius: '25px',
            cursorwidth: '7px',
            cursorcolor: '#fb414e',
            cursorfixedheight: 120,
            zindex:'99999999'

            });
        }, 500);
    }
});  

//trigger mixer

$("#container").mixItUp();
    
    
    
    
    
    
    
    
    
    