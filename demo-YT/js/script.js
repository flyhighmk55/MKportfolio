
//윈도우 리사이즈
var ww = $(window).outerWidth();
function windowresize() {
  $(window).resize(function () {
    ww = $(window).outerWidth();
  });
}
windowresize();


//검색창 클릭시 돋보기 나오기
$('.mh_search-input').click(function () {
  $('.mh_search-input, .mh_search-form, .mh_search-related').addClass('on');
});
//검색창 이외 클릭시 돋보기 없어지기
$('body').on('click', function (e) {
  if ($('.mh_search-form').has(e.target).length == 0) {
    $('.mh_search-input, .mh_search-form, .mh_search-related').removeClass('on');
  }
});

//검색버튼 클릭시 검색창 나타나기
$('.mh_search-open').click(function () {
  windowresize();
  if (ww <= 790) {
    $('.mh_search-back, .mh_search-go, .mh_search-voice').css({ 'display': 'block' });
    $('.mh_search-form').css({ 'display': 'flex', 'width': '70%' });
    $('#master-header_center').css({ 'justify-content': 'center' });
    $('#master-header_left, .mh_search-open, #master-header_right').css({ 'display': 'none' });
  }
});
//뒤로버튼 클릭시 검색창 사라지기
$('.mh_search-back').click(function () {
  windowresize();
  if (ww <= 790) {
    $('.mh_search-back, .mh_search-go, .mh_search-voice').css({ 'display': 'none' });
    $('.mh_search-form').css({ 'display': 'none', 'width': '50%' });
    $('#master-header_center').css({ 'justify-content': 'flex-end' });
    $('#master-header_left, .mh_search-open, #master-header_right').css({ 'display': 'flex' });
  }
});

//윈도우 너비 조절시에 해당 너비의 스타일 보여주기
$(window).resize(function () {
  if (ww >= 791) {
    $('.mh_search-back, .mh_search-go, .mh_search-voice').css({ 'display': 'block' });
    $('.mh_search-open, .mh_search-back').css({ 'display': 'none' });
    $('.mh_search-form').css({ 'display': 'flex', 'width': '50%' });
    $('#master-header_left, #master-header_right').css({ 'display': 'flex' });
    $('#master-header_center').css({ 'justify-content': 'center' });
  } else {
    $('.mh_search-back, .mh_search-go, .mh_search-voice').css({ 'display': 'none' });
    $('.mh_search-form').css({ 'display': 'none', 'width': '50%' });
    $('#master-header_center').css({ 'justify-content': 'flex-end' });
    $('#master-header_left, .mh_search-open, #master-header_right').css({ 'display': 'flex' });
  }
});


//헤더의 아이콘 호버시 정보문구 가장 위로 보이게하기
$('.hover-info1').hover(
  function () {
    $('#main__header').css({ 'z-index': 9 });
  }, function () {
    $('#main__header').css({ 'z-index': 10 });
  }
);





//.gnb__item 클릭 이벤트
$('.gnb__item').click(function () {
  //.gnb__item의 아이콘 색, 배경색 초기화
  $('.gnb__icon').removeClass('e_click');
  $('.s_2color-icons .gnb__icon-w').removeClass('e_hide');
  $('.s_2color-icons .gnb__icon-b').addClass('e_hide');

  //.gnb__item의 아이콘 색, 배경색 변경
  if ($(this).has('.s_2color-icons').length === 1) {
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
for (var n = 0; n <= gnb__user_l; n++) {
  if (n >= 4) {
    $('#gnb__user .gnb__categoty-inner .gnb__item').eq(n).addClass('e_hide');
    $('#gnb__user .gnb__categoty-inner .gnb__item').eq(n).addClass('e_toggle');
  }
};

//#gnb__subscribe .s_list-brief, 토글 아이템 감추기
var gnb__subscribe_l = $('#gnb__subscribe .gnb__categoty-inner .gnb__item').length;
for (var n = 0; n <= gnb__subscribe_l; n++) {
  if (n >= 7) {
    $('#gnb__subscribe .gnb__categoty-inner .gnb__item').eq(n).addClass('e_hide');
    $('#gnb__subscribe .gnb__categoty-inner .gnb__item').eq(n).addClass('e_toggle');
  }
};
//#gnb__subscribe .s_list-brief, 토글 아이템 갯수 입력
var gnb__subscribe_toggle_l = $('#gnb__subscribe .gnb__categoty-inner .gnb__item.e_toggle').length;
$('#gnb__subscribe .gnb__item-count').text(gnb__subscribe_toggle_l);


//.s_list-brief 클릭 이벤트
$('.s_list-brief').click(function () {
  //아이콘 색, 아이콘 이름 변경
  $(this).find('.gnb__icon').toggleClass('e_hide');
  $(this).find('.gnb__item-name').toggleClass('e_hide');

  //토글 아이템 보이기||감추기
  $(this).parents('.gnb__categoty').find('.gnb__categoty-inner .gnb__item.e_toggle').toggleClass('e_hide');
});







//#gnb 분기점별 기본 형태
function gnb_disply() {
  //블랙스크린 없음
  $('#blackscreen').hide();
  if (ww <= 790) {
    $('#gnb').addClass('e_hide');
    $('#gnb').addClass('e_open');
    $('#main').css({ 'left': 0, 'width': '100%' });
  }
  else if (ww <= 1300) {
    $('#gnb').addClass('e_open');
    $('#gnb').removeClass('e_hide');

    var gnb_w = $('#gnb.e_open').width();
    $('#main').css({ 'left': gnb_w, 'width': 'calc(100% - ' + gnb_w + 'px)' });
  }
  else {
    $('#gnb').removeClass('e_open');
    $('#gnb').removeClass('e_hide');

    var gnb_w = $('#gnb').width();
    $('#main').css({ 'left': gnb_w, 'width': 'calc(100% - ' + gnb_w + 'px)' });
  }
}
gnb_disply();
//윈도우 너비가 바뀌면 #gnb 분기점별 기본 형태로 만들어라
$(window).resize(function () {
  ww = $(window).outerWidth();
  gnb_disply();
});



//헤더의 .mh_nav-btn 클릭 이밴트
$('#master-header .mh_nav-btn').click(function () {
  windowresize();
  //간략메뉴 형태 on/off
  $('#gnb').toggleClass('e_open');
  if (ww >= 1301) {
    //#main의 left 값 변경
    var gnb_w = $('#gnb').width();
    $('#main').css({ 'left': gnb_w, 'width': 'calc(100% - ' + gnb_w + 'px)' });
  }
  else if (ww <= 1300) {
    //너비가 1300 이하인 구간에서만 블랙 스크린 작동
    $('#blackscreen').fadeToggle();
    //#gnb가 왼쪽에서 나타나는 애니메이션
    $('#gnb').animate({ 'left': -240 }, 0).animate({ 'left': 0 }, 300);
    //간략메뉴가 보이는 상태아면, #gnb 애니메이션 없음
    if ($('#gnb').hasClass('e_open') === true) {
      $('#gnb').finish();
    }
    //너비가 790이하인 구간에서는 간략메뉴 안보이게
    if (ww <= 790) {
      $('#gnb').toggleClass('e_hide');
    }
  }
});


//#gnb의 .mh_nav-btn 클릭 이밴트
$('#gnb .mh_nav-btn').click(function () {
  windowresize();
  //너비가 1300 이하인 구간에서만 작동
  if (ww <= 1300) {
    $('#blackscreen').fadeToggle();
    //#gnb가 왼쪽으로 사라진 후에
    $('#gnb').animate({ 'left': 0 }, 0).animate({ 'left': -240 }, 300).animate({ 'left': 0 }, 0, function () {
      //간략메뉴가 보이게 하라
      $('#gnb').addClass('e_open');
      //너비가 790이하인 구간에서는 간략메뉴 안보이게 하라
      if (ww <= 790) {
        $('#gnb').toggleClass('e_hide');
      }
    });
  }
});










var item = $('.main__header-item');
var total_width = 0;

item.each(function () {
  total_width = total_width + $(this).outerWidth(true);//요소에 마진이 있다면
});
console.log(total_width);


var item_l = $('.main__header-item').length;

$('.main__header-list-inner').css({ 'width': total_width });





function header_width() {
  var list_w = $('.main__header-list').width();
  var inner_w = $('.main__header-list-inner').width();

  if (inner_w >= list_w) {

    $('.main__header-more').addClass('e_show');

    var p = $('.main__header-list-inner').position();

    if (p.left = 60) {
      $('.main__header-more.s_next .icon-container').addClass('e_show');
    } else if (p.left = (inner_w - list_w)) {
      $('.main__header-more.s_prev .icon-container').addClass('e_show');
    }
  } else {
    $('.main__header-more .icon-container').addClass('e_show');
  }
};
header_width();


$(window).resize(function () {
  ww = $(window).outerWidth();
  header_width();

});




var n = 1;



$('.main__header-more.s_next').click(function () {
  windowresize();
  var inner_w = $('.main__header-list-inner').width();
  var list_w = $('.main__header-list').width();


  if (n <= 2) {
    $('.main__header-list-inner').animate({ 'left': -(((inner_w - list_w) / 3) * n) });
  } else if (n > 2) {
    $('.main__header-list-inner').animate({ 'left': -(inner_w - list_w) });
    n = 2;
  }
  n++;
});





$('.main__header-more.s_prev').click(function () {
  windowresize();

  var inner_w = $('.main__header-list-inner').width();
  var list_w = $('.main__header-list').width();

  n--;

  if (n <= 0) {
    $('.main__header-list-inner').animate({ 'left': 0 });
    n = 1;
  } else if (0 < n <= 2) {
    $('.main__header-list-inner').animate({
      'left': (-(inner_w - list_w) / 4) * n
    });
  }


});







