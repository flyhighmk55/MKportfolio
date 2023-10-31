/* 공통 & 초기화-----------------------------------------------------------------------------------------------------------------------*/


// AOS 초기화
  
AOS.init({
  offset: 200,
  delay: 0,
  once: true,
});


// 반응형 너비 인식 재측정---------------------------------
  
var ww = $(window).outerWidth();
$(window).resize(function(){
  ww = $(window).outerWidth();
  //console.log(ww);
  location.reload();
});


/* 연속 스타일&애니메이션 반응형 구간------------------------
  
  $(window).resize(function(){
    if ( ww >= 1024 ){ //pc
    } else if ( ww >= 768 && ww <= 1023 ){ //태블릿
    } else { //모바일
    };
  });
  
---------------------------------------------------*/











/* header-----------------------------------------------------------------------------------------------------------------------*/



//[animate(hover:none)] 네비 버튼을 클릭하면 네비 ON
$('.header__right-btn').on('click', function(){
    $('html, body, .header__center, .header__right-btn').toggleClass('on');
});
 
//[animate(hover:none)] 네비 이외 클릭하면(클릭한 곳이 .nav가 아니면) 네비 OFF
$('.header__center').on('click', function(e){
  if($('.nav').has(e.target).length == 0 ){ //e.target은 이벤트를 촉발시킨 엘리먼트를 말한다. 클릭 이벤트가 발생했을 때, 클릭이벤트를 촉발시킨 엘리먼트를(직접적으로 클릭된 엘리먼트) .nav가 가지고 있으면(e.target이 '.nav' 또는 '.nav'의 자식이면) 함수를 실행하지 않고, 가지고 있으면(e.target이 '.nav'의 자식이 아니면) 함수를 실행해라.
    $('html, body, .header__center, .header__right-btn').removeClass('on');
  }
  //console.log($('.nav').has(e.target).length); //1 0
  //console.log(e.target); //'.nav__btn' '.header__center'
});




//[animation] 스크롤의 높이가 section으로 넘어가면 헤더의 색을 바꿔라
$(window).scroll(function(){
    var offset = $('section').offset().top;
    var top = $('body, html').scrollTop();
    if(offset <= top ){
        $('.header').addClass('scroll');
    } else {
        $('.header').removeClass('scroll');
    }
});








/* footer-----------------------------------------------------------------------------------------------------------------------*/

//[style] 번들 아이콘 배치 footer
var ir1_l = $('.footer__sns li').length;
for (var i = 0; i < ir1_l; i++){
  $('.footer__sns li').eq(i).find('a').css({'background-position': 'left ' + (-40*i) + 'px top -210px'});
};



























