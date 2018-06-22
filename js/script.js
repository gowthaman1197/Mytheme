/* Navigation Script Starts */

(function($){
    $('#nav').affix({
        offset: {
          top: $('header').height()
        }
    }); 
    $('#sidebar').affix({
        offset: {
            top: 200
        }
      }); 
    })(jQuery);

/* Navigation Script Ends */

/* Dropdown menu */

$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
        $('span', this).toggleClass("caret caret-up");
    },
    function() {
        $(this).removeClass('open');
        $('span', this).toggleClass("caret caret-up"); 
    });
});

// /* Hide copying the content starts */

// $(function() {
//     $(this).bind("contextmenu", function(e) {
//         e.preventDefault();
//     });
// }); 

// /* Hiding copying the content ends */ 

// /* Disbale the mouse settings start  */

// function killCopy(e){ 
//     return false 
// } 
// function reEnable(){ 
//     return true 
// } 
// document.onselectstart=new Function ("return false"); 
// if (window.sidebar){ 
//     document.onmousedown=killCopy; 
//     document.onclick=reEnable; 
// }

// /* Disbale the mouse settings end  */

/* Client slider starts here */

(function($){
    $('.carousel[data-type="multi"] .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    for (var i=0;i<4;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }          
        next.children(':first-child').clone().appendTo($(this));
    }
    });
})(jQuery);

/* Client slider ends */

/* Scroll up starts */

(function($){
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
})(jQuery);

/* Scroll up ends */