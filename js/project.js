


//[style] GNB에 project창이 활성화됨을 표시
$('header .nav__btn').eq(1).addClass('on');

//[style] section 최소 높이 확보
var hf_h = $('header').height() + $('footer').height() + 50;
console.log(hf_h);
$('#project-main').css({'min-height': 'calc(100vh - '+ hf_h +'px)'});
console.log('calc(100vh - '+ hf_h +'px)');






//[style] .project__item, .project-popup__cont 역순으로 배열
var project_prev = $('.project__item').prevAll();
$('.project-main__cont').append(project_prev);

var popup_prev = $('.project-popup__cont').prevAll();
$('.poject-popup__frame').append(popup_prev);



//팝업창에서 스크롤이 발생되면 AOS 스크롤 기준점을 팝업창으로 바꿔라 
$('#project-popup').scroll(function(){
    AOS.refresh();
}); 




//프로젝트 아이템이 클릭되면 팝업창을 활성화하라
$('.project__item').click(function(){
  //html의 스크롤을 멈추고
  $('html').css('overflow-y', 'hidden');
  
  //해당 내용을 담은 팝업창을 보이게 하라
  var i = $(this).index();  
  $('#project-popup').addClass('on');
  $('.project-popup__cont').eq(i).addClass('on');
  
  //팝업창의 위치를 윈도우의 가운데에 놓아라
  var ww = $(window).width();
  var wh = $(window).height();
  var pw = $('#project-popup').width();
  var ph = $('#project-popup').height();
  $('#project-popup').css({'top': (wh/2) - (ph/2) + ($(window).scrollTop()), 'left':(ww/2) - (pw/2) + ($(window).scrollLeft())});
  
  
});


//팝업창 밖을 클릭하면 팝업창이 사라지게 하라
$('#project-popup').on('click', function (e) {
  if ($('.poject-popup__frame').has(e.target).length == 0) { 
    //팝업창을 안보이게 하고
    $('#project-popup, .project-popup__cont').removeClass('on');
    
    //html의 스크롤을 다시 활성화 하고
    $('html').css('overflow-y', 'visible');
//    $("#project-popup").animate({'scrollTop':0},0);
//    AOS.init({
//    once: false,
//    });
    //팝업창을 새로고침하여 다시 열였을 때 AOS가 작동할 수 있도록 준비해라 
    $('.popup__func-item').reload(location.href + '.popup__func-item');
//      location.reload('true');
//    location.href = location.href; 
  }
});



















