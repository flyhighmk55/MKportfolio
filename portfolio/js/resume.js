//[style] GNB에 resume창이 활성화됨을 표시
if(ww >= 768){
  $('header .nav__btn').eq(2).addClass('on');
}



//

if ( ww <= 740 ){
  windowresize();
  $('.resume__fraim').clone().prependTo('body');
  $('body > .resume__fraim').removeClass('on');
}





$('.resume__fraim').click(function(){
  if (ww <= 740 ){  
    $('body > .resume__fraim').toggleClass('on');
    $('html, body').toggleClass('scrollcontrol');

    
    $('body > .resume__fraim').css({ 'top': ($(window).scrollTop()), 'left':($(window).scrollLeft()) });
  }
});

