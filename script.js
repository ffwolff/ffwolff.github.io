///Parallax///
$('div.bgParallax').each(function(){
    var $obj = $(this);
    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 
        var bgpos = '50% '+ yPos + 'px';
        $obj.css('background-position', bgpos );
    }); 
});

//SmoothScroll//
$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); 
        return false;
      }
    }
  });
});