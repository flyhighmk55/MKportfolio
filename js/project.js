


//[style] GNB에 project창이 활성화됨을 표시
if (ww >= 768) {
  $('header .nav__btn').eq(1).addClass('on');
}


//[style] section 최소 높이 확보
var hf_h = $('header').height() + $('footer').height() + 50;
//console.log(hf_h);
$('#project-main').css({ 'min-height': 'calc(100vh - ' + hf_h + 'px)' });
//console.log('calc(100vh - '+ hf_h +'px)');




//[style] .project__item, .project-popup__cont 역순(최신순)으로 배열
var project_prev = $('.project__item').prevAll();
$('.project-main__cont').append(project_prev);

var popup_prev = $('.project-popup__cont').prevAll();
$('.poject-popup__frame').append(popup_prev);



//#project-popup 자동완성
var popup_l = $('.project-popup__cont').length;
for (var i = 0; i <= popup_l; i++) {
  //팝업 아이템 순서
  var popup_cont = $('.project-popup__cont').eq(i);
  //입력값
  var popup_managing = popup_cont.find('.popup-managing');


  //[class="popup__main-title"]
  var popup_title = popup_managing.find('.main-title').text();
  popup_cont.find('.popup__main').prepend(
    '<dl class="popup__main-title"><dt>Projcet</dt><dd>' + popup_title + '</dd></dl>'
  );

  //[class="popup__main-img"]
  var popup_img = popup_managing.find('.main-img').html();
  popup_cont.find('.popup__main-img').prepend(
    popup_img
  );


  //[class="popup__main-info"]
  var popup_info_des = popup_managing.find('.item-des').text();
  var popup_info_link = popup_managing.find('.item-link .link').attr('href');
  var popup_info_github = popup_managing.find('.item-link .github').attr('href');
  var popup_info_original = popup_managing.find('.item-link .original').attr('href');
  var popup_info_skill = popup_managing.find('.item-skill').html();
  var popup_info_role = popup_managing.find('.item-role').html();
  var popup_info_cate = popup_managing.find('.item-cate').html();
  popup_cont.find('.popup__main-info').append(
    '<div class="popup-info__item des"><h3>DESCRIPTION</h3><p>' + popup_info_des + '</p></div><div class="popup-info__item link"><h3>LINK</h3><p><a href="' + popup_info_link + '" target="_blank"></p><div class="info__link-btn"><a href="' + popup_info_github + '" target="_blank" class="s-btn1">Github</a><a href="' + popup_info_original + '" target="_blank" class="s-btn1">Original</a></div></div><div class="popup-info__item skill"><h3>SKILLS</h3><p>' + popup_info_skill + '</p></div><div class="popup-info__item role"><h3>ROLE / CONTRIBUTION</h3><p>' + popup_info_role + '</p></div><div class="popup-info__item cate"><h3>CATEGORY</h3><p>' + popup_info_cate + '</p></div>'
  );
  //[class="link"] '.popup-info__item.link p a' herf 입력 시 텍스트 자동완성
  var projec_link = popup_cont.find('.popup-info__item.link > p > a').attr('href');
  popup_cont.find('.popup-info__item.link p a').text(projec_link);


  //[class="popup__func"] 자동완성
  var popup_func1_des = popup_managing.find('.func1 .des').html();
  var popup_func1_attach = popup_managing.find('.func1 .attach').html();
  var popup_func2_des = popup_managing.find('.func2 .des').html();
  var popup_func2_attach = popup_managing.find('.func2 .attach').html();
  var popup_func3_des = popup_managing.find('.func3 .des').html();
  var popup_func3_attach = popup_managing.find('.func3 .attach').html();
  popup_cont.find('.popup__func').append(
    '<dl class="popup__func-title s-tit2"><dt>Function</dt><dd>I want to show you my code designs!</dd></dl><div class="popup__func-item s-itembox-outer"><div class="popup__func-item-inner s-itembox-inner"><dl class="popup-item__title">' + popup_func1_des + '</dl><div class="popup-item__att">' + popup_func1_attach + '</div></div></div><div class="popup__func-item s-itembox-outer"><div class="popup__func-item-inner s-itembox-inner"><dl class="popup-item__title">' + popup_func2_des + '</dl><div class="popup-item__att">' + popup_func2_attach + '</div></div></div><div class="popup__func-item s-itembox-outer"><div class="popup__func-item-inner s-itembox-inner"><dl class="popup-item__title">' + popup_func3_des + '</dl><div class="popup-item__att">' + popup_func3_attach + '</div></div></div>'
  );


  //[class="popup__review"] 자동완성
  var popup_review = popup_managing.find('.review').text();
  popup_cont.find('.popup__review').prepend(
    '<div class="popup__review-inner"><dl class="popup__review-title s-tit2"><dt>Review</dt><dd>I learned a lot from this project!</dd></dl><p class="popup__review-txt">' + popup_review + '</p></div>'
  );



};

















//프로젝트 아이템이 클릭되면 프로젝트 상세를 활성화하라
$('.project__item').click(function () {
  //html의 스크롤을 멈추고
  $('html').css('overflow-y', 'hidden');

  //해당 내용을 담은 팝업창을 보이게 하라
  var i = $(this).index();
  //console.log(i);
  $('#project-popup').addClass('on');
  $('.project-popup__cont').eq(i).addClass('on');

  //팝업창의 위치를 윈도우의 가운데에 놓아라
  var ww = $(window).width();
  var wh = $(window).height();
  var pw = $('#project-popup').width();
  var ph = $('#project-popup').height();
  $('#project-popup').css({ 'top': (wh / 2) - (ph / 2) + ($(window).scrollTop()), 'left': (ww / 2) - (pw / 2) + ($(window).scrollLeft()) });
});






//펑션 이미지를 클릭하면 확대한 이미지 팝업
$('.popup-att__item.code').click(function () {
  //모든 코드 이미지 초기화
  $('.popup-att__item.code').removeClass('on');
  //확대 이미지 엘리먼트를 비우고
  $('.func__enlarged').empty();
  //윈도우 스크롤을 금지하고
  $('#project-popup').css({ 'overflow-y': 'hidden' });
  //클릭된 이미지 엘리먼트를 복사하여
  var clone = $(this).clone();
  //확대이미지 엘리먼트 안에 넣어라
  $('.func__enlarged').addClass('on').append(clone);
  //이 엘리먼트를 확대하고, 원본 이미지 클릭시 창이 닫히는 것을 방지해라
  $('.func__enlarged .popup-att__item.code').addClass('on').removeClass('popup-att__item');

  //확대이미지를 화면 가운데에 위치 시켜라
  var ww = $(window).width();
  var wh = $(window).height();
  var fw = $('.func__enlarged').width();
  var fh = $('.func__enlarged').height();
  $('.func__enlarged').css({ 'top': (wh / 2) - (fh / 2) + ($('#project-popup').scrollTop()) });
});





//확대이미지&프로젝트 상세 팝업창을 닫는 함수
$('#project-popup').on('click', function (e) {
  //.func__enlarged 확대이미지 닫기
  if ($('.func__enlarged').has(e.target).length == 1) {
    //확대 이미지 엘리먼트를 비우고
    $('.func__enlarged').removeClass('on').empty();
    //확대 이미지를 원래 사이즈로 바꾸고, 이미지 클릭방지? 없애기, 스크롤 원위치
    $('.code.on').removeClass('on').addClass('popup-att__item').animate({ 'scrollLeft': 0 }, 0);
    //이건뭐지?? $('#project-popup, .project-popup__cont').finish();
    //스크롤 재활성화
    $('#project-popup').css({ 'overflow-y': 'visible' });
  }

  //#project-popup 프로젝트 상세 닫기
  else if ($('.poject-popup__frame').has(e.target).length == 0) {
    //팝업창을 안보이게 하고
    $('#project-popup, .project-popup__cont').removeClass('on');

    //html의 스크롤을 다시 활성화 하고
    $('html').css('overflow-y', 'scroll');

    //팝업창의 스크롤 위치를 맨위로 옮겨놔라.
    $("#project-popup").animate({ 'scrollTop': 0 }, 0);

    //확대이미지가 열려 있다면 함께 닫기
    $('.func__enlarged').removeClass('on').empty();
    $('.code.on').removeClass('on').addClass('popup-att__item').animate({ 'scrollLeft': 0 }, 0);
    $('#project-popup, .project-popup__cont').finish();
    $('#project-popup').css({ 'overflow-y': 'visible' });
  }
});
















