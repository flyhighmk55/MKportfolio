
//윈도우 리사이즈
var ww = $(window).outerWidth();
function windowresize (){
  $(window).resize(function () {
  ww = $(window).outerWidth();
  });
}
windowresize();


//검색창 클릭시 돋보기 나오기
$('.mh_search-input').click(function(){
  $('.mh_search-input, .mh_search-form, .mh_search-related').addClass('on');
});
//검색창 이외 클릭시 돋보기 없어지기
$('body').on('click', function (e) {
  if ($('.mh_search-form').has(e.target).length == 0) { 
    $('.mh_search-input, .mh_search-form, .mh_search-related').removeClass('on');
  }
});

//검색버튼 클릭시 검색창 나타나기
$('.mh_search-open').click(function(){
  windowresize();
  if( ww <= 790 ){
    $('.mh_search-back, .mh_search-go, .mh_search-voice').css({'display':'block'});
    $('.mh_search-form').css({'display':'flex', 'width':'70%'});
    $('#master-header_center').css({'justify-content':'center'});
    $('#master-header_left, .mh_search-open, #master-header_right').css({'display':'none'});
  }
});
//뒤로버튼 클릭시 검색창 사라지기
$('.mh_search-back').click(function(){
  windowresize();
  if( ww <= 790 ){
    $('.mh_search-back, .mh_search-go, .mh_search-voice').css({'display':'none'});
    $('.mh_search-form').css({'display':'none', 'width':'50%'});
    $('#master-header_center').css({'justify-content':'flex-end'});
    $('#master-header_left, .mh_search-open, #master-header_right').css({'display':'flex'});
  }
});

//윈도우 너비 조절시에 해당 너비의 스타일 보여주기
$(window).resize(function () {
  if( ww >= 791 ){
      $('.mh_search-back, .mh_search-go, .mh_search-voice').css({'display':'block'});
    $('.mh_search-open, .mh_search-back').css({'display':'none'});
    $('.mh_search-form').css({'display':'flex', 'width':'50%'});
    $('#master-header_left, #master-header_right').css({'display':'flex'});
    $('#master-header_center').css({'justify-content':'center'});
  } else {
    $('.mh_search-back, .mh_search-go, .mh_search-voice').css({'display':'none'});
    $('.mh_search-form').css({'display':'none', 'width':'50%'});
    $('#master-header_center').css({'justify-content':'flex-end'});
    $('#master-header_left, .mh_search-open, #master-header_right').css({'display':'flex'}); 
  }
});





//.gnb__item 클릭 이벤트
$('.gnb__item').click(function(){
  //.gnb__item의 아이콘 색, 배경색 초기화
  $('.gnb__icon').removeClass('e_click');
  $('.s_2color-icons .gnb__icon-w').removeClass('e_hide');
  $('.s_2color-icons .gnb__icon-b').addClass('e_hide');
  
  //.gnb__item의 아이콘 색, 배경색 변경
  if($(this).has('.s_2color-icons').length === 1){
    // 아이콘 색이 두가지인 경우
    $(this).find('.gnb__icon-w').addClass('e_hide').siblings().removeClass('e_hide');
  } else {
    //아이콘 색이 한가지인 경우
    $(this).find('.gnb__icon').addClass('e_click');
  };
  
  //.gnb__item의 아이콘 이름 폰트웨이트 변경
  $('.gnb__item-name').removeClass('e_click');
  $(this).find('.gnb__item-name').addClass('e_click');
});




//#gnb__user .s_list-brief, 토글 아이템 감추기
var gnb__user_l = $('#gnb__user .gnb__categoty-inner .gnb__item').length;
for(var n = 0; n <= gnb__user_l; n++){
  if( n >= 4 ) {
    $('#gnb__user .gnb__categoty-inner .gnb__item').eq(n).addClass('e_hide');
    $('#gnb__user .gnb__categoty-inner .gnb__item').eq(n).addClass('e_toggle');
  } 
};

//#gnb__subscribe .s_list-brief, 토글 아이템 감추기
var gnb__subscribe_l = $('#gnb__subscribe .gnb__categoty-inner .gnb__item').length;
for(var n = 0; n <= gnb__subscribe_l; n++){
  if( n >= 7 ) {
    $('#gnb__subscribe .gnb__categoty-inner .gnb__item').eq(n).addClass('e_hide');
    $('#gnb__subscribe .gnb__categoty-inner .gnb__item').eq(n).addClass('e_toggle');
  } 
};
//#gnb__subscribe .s_list-brief, 토글 아이템 갯수 입력
var gnb__subscribe_toggle_l = $('#gnb__subscribe .gnb__categoty-inner .gnb__item.e_toggle').length;
$('#gnb__subscribe .gnb__item-count').text(gnb__subscribe_toggle_l);


//.s_list-brief 클릭 이벤트
$('.s_list-brief').click(function(){
  //아이콘 색, 아이콘 이름 변경
  $(this).find('.gnb__icon').toggleClass('e_hide');
  $(this).find('.gnb__item-name').toggleClass('e_hide');
  
  //토글 아이템 보이기||감추기
  $(this).parents('.gnb__categoty').find('.gnb__categoty-inner .gnb__item.e_toggle').toggleClass('e_hide');
});






function gnb_disply (){ 
  $('#blackscreen').hide();
  
  if(ww <= 790){
    $('#gnb').addClass('e_hide');
    $('#gnb').addClass('e_open');
  }
  else if(ww <= 1300){
    $('#gnb').addClass('e_open');
    $('#gnb').removeClass('e_hide');
  } 
  else {
    $('#gnb').removeClass('e_open');
    $('#gnb').removeClass('e_hide');
  }
}
gnb_disply();


$(window).resize(function () {
  ww = $(window).outerWidth();
  gnb_disply();
});




$('#master-header .mh_nav-btn').click(function(){
  windowresize();
  $('#gnb').toggleClass('e_open');
  
  
  if(ww <= 1300){
    $('#blackscreen').fadeToggle();
    
    $('#gnb').animate({'left':-240}, 0).animate({'left':0},300);
    
    if($('#gnb').hasClass('e_open') === true){
      $('#gnb').finish();
    }
    
    if(ww <= 790){
      $('#gnb').toggleClass('e_hide');
    }
  }
});






$('#gnb .mh_nav-btn').click(function(){
  windowresize();
  if(ww <= 1300){
    $('#blackscreen').fadeToggle();
    $('#gnb').animate({'left':0},0).animate({'left':-240}, 300).animate({'left':0},0, function(){
      
    $('#gnb').addClass('e_open');
      
      if(ww <= 790){
        $('#gnb').toggleClass('e_hide');
      }

    });
  }
});








