
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


$('.sn_item').click(function(){
  
  
  
  
//  
//  $('.icon-shaper.more').show();
//  $('.icon-shaper.brief').hide();
  $(this).find('.icon-shaper.more, span.more, .icon-shaper.brief, span.brief').toggle();
  
  
  
  
  $('.sn_item').removeClass('on');
  $(this).toggleClass('on');
});






















