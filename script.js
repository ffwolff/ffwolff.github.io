//Responsive Menu
function openMenu() {
  var x = document.getElementById("navBar");
  var y = document.getElementById("menuIcon");
  if (x.className === "topnav" || x.className === "topnav sticky") {
    x.className += " responsive";
  } else if (x.className === "topnav sticky responsive" || x.className === "topnav responsive sticky") {
    x.className = "topnav sticky";
  } else {
    x.className = "topnav";
  }
  if(y.className === "fa fa-bars") {
    y.className = "fa fa-times";
  } else {
    y.className = "fa fa-bars";
  }
}

//Parallax//
$( document ).ready(function() {
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

//Sticky//
var navPosition=$('#navBar').offset().top;


//STICKY MENU
$(window).scroll(function(){
  var navTop=$(window).scrollTop();
  if(navPosition < navTop){
    $('#navBar').addClass('sticky');
  }
  else{
    $('#navBar').removeClass('sticky');
  }
});

//TRANSITION MENU
$('ul a,#gotoTop').click(function(){
    var lienHref=$(this).attr('href');
    var positionHrefTop=$(lienHref).offset().top;
    $('html,body').animate({scrollTop:positionHrefTop-50},1000);
    return false;
});

//
});