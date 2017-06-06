/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

$(document).ready(function(e) {    
 $("nav a").click(function (event) {
    event.preventDefault();   
    var destino = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        destino = $(document).height() - $(window).height();
    } else {
        destino = $(this.hash).offset().top;
    }
     
    $('html,body').animate({
        scrollTop: destino 
    }, 2000, 'swing');
});
});


