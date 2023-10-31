/* #index-main------------------------------------------------------------------------------------------------------------------------*/

//[style] 번들 아이콘 배치 #index-main-contect
var ir1_l = $('.intro-contect__list li').length;
for (var i = 0; i < ir1_l; i++){
  $('.intro-contect__list li').eq(i).find('a').css({'background-position': 'left ' + (-60*i) + 'px top 0'});
};

//[animate] 컨텍트 버튼 클릭시 연락처 버튼 보이기
$('.index-main__intro-contect button').click(function(){
  $(this).toggleClass('on');
  $('.intro-contect__list').toggleClass('on');
});




Kakao.init('5cdf5476deec053f626963ab7fb44463'); 
function chatChannel() {
  Kakao.Channel.chat({
    channelPublicId: '_ZeUTxl',
  });
}











//[animate] #index-main-deco 동작 무한루프
function deco_move (){  
  $('.index-main__deco-girl').animate({'top':'-4vw'},500).animate({'top':0},500);
  if ( ww >= 1024 ){
    $('.index-main__deco-sprinkles').animate({'bottom':'3vw'},500).animate({'bottom':'-5vw'},500);
  } else if ( ww >= 768 && ww <= 1023 ){
    $('.index-main__deco-sprinkles').animate({'bottom':'8vw'},500).animate({'bottom':0},500);
  } else {
    $('.index-main__deco-sprinkles').animate({'bottom':'15vw'},500).animate({'bottom':0},500);
  };
};
  
setInterval(function(){
  deco_move();
},0);







/* #index-about------------------------------------------------------------------------------------------------------------------------*/

//[style] 번들 아이콘 배치 #index-about__sns
var ir1_l = $('.index-about__sns-list li').length;
for (var i = 0; i < ir1_l; i++){
  $('.index-about__sns-list li').eq(i).find('a').css({'background-position': 'left ' + (-60*i) + 'px top -60px'});
};



//[animation] GNB의 about을 클릭하면 해당 엘리먼트로 스크롤 이동
$('.nav__btn').eq(0).click(function(){
  var offset = $('#index-about').offset().top - $('header').height() + 5;
  $('html, body').animate({scrollTop:offset}, 300);
  if(ww <= 767){ //모바일 사이즈
    $('html, body, .header__center, .header__right-btn').removeClass('on'); 
  }
});

//[animation] 스크롤 높이가 #index-about 이상이면 GNB의 about 색상 변경
$(window).scroll(function(){
  var offset = $('#index-about').offset().top - $('header').height();
  var top = $(window).scrollTop();
  
  if(ww >= 767 && offset <= top) {
    $('.nav__btn').eq(0).addClass('on');
  } else {
    $('.nav__btn').eq(0).removeClass('on');
  }
});








/* #index-skill------------------------------------------------------------------------------------------------------------------------*/


//[style] 번들 아이콘 배치 #index-skill
var ir1_l = $('.index-skill__cont-list li').length;
for (var i = 0; i < ir1_l; i++){
  $('.index-skill__cont-list li').eq(i).find('.skill__ico').css({'background-position': 'left ' + (-90*i) + 'px top -120px'});
};



//[animate(hover:none)] 클릭시 설명창 보이기 & 더보기 링크 회전
$('.index-skill__cont-list li').click(function(){
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).find('dt a').toggleClass('on');
});


//[animate] 스크롤시 프로그래스바, 배경 동작
$(window).scroll(function(){
  var offset = $('#index-skill').offset().top - 250;
  var top = $('html, body').scrollTop();
  if(offset <= top) {
    $('.index-skill__wrap').addClass('on');
    $('.skill__prograss-bar').addClass('on');
  }
});













