


//[style] GNB에 project창이 활성화됨을 표시
$('header .nav__btn').eq(1).addClass('on');

//[style] section 최소 높이 확보
var hf_h = $('header').height() + $('footer').height() + 50;
console.log(hf_h);
$('#project-main').css({'min-height': 'calc(100vh - '+ hf_h +'px)'});
console.log('calc(100vh - '+ hf_h +'px)');






//[style] .project__item, .project-popup__cont 역순으로 배열
var prev = $('.project__item').prevAll();
$('.project-main__cont').append(prev);
 
 






$('.project__item').click(function(){
  var i = $(this).index();
  $('#project-popup').on('scroll',AOS.refreshHard);

  $('html').css('overflow', 'hidden');
  $('#project-popup').addClass('on');
  $('.project-popup__cont').eq(i).addClass('on');
});