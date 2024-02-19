$('.number .input__btn, .operator .input__btn').on('click', function(){
  var value = $(this).attr('value');
  var text = $(this).text();

  
  $('#screen__formula').append(text);
  $('#recent__text').append(text);
  $('#recent__formula').append(value);
});


$('#submit').on('click', function(){
  var formula = $('#recent__formula').text();
  console.log(formula);
  
  var answer = eval(formula);
  $('#screen__answer, #recent__answer').append(answer);
  

});




$('#allclear').on('click', function(){
  //스크린 수식 지우기
  $('#screen__formula').empty();
  $('#screen__answer').empty();
  
  //최근 리스트 값 가져와서 지난 리스트로 넘기기
  var text = $('#recent__formula').text();
  var formula = $('#recent__text').text();
  var answer = $('#recent__answer').text();
  
  $('#list__past').prepend('<div class="list__past-items"><div class="past__text list__item">'+text+'</div><div class="past__formula list__item">'+formula+'</div><div class="list__eq">=</div><div class="past__answer list__item">'+answer+'</div></div>');
  
  //최근 리스트 값 지우기
  $('#recent__text').empty();
  $('#recent__formula').empty();
  $('#recent__answer').empty();
});





$('#clear').on('click', function(){
  var text = $('#screen__formula').text();
  console.log(text);
  var get = text.slice(0, -1);
    console.log(get);
  
  $('#screen__formula').text(get);
  
  
   var text = $('#recent__formula').text();
  console.log(text);
  var get = text.slice(0, -1);
    console.log(get);
  
  $('#recent__formula').text(get);
  
});






$('.bring__btn').on('click', function(){
  var text = $('.list__past-items:first-child .past__text').text();
  var formula = $('.list__past-items:first-child .past__formula').text();
  var answer = $('.list__past-items:first-child .past__answer').text();
  
  $('#recent__text').text(text);
  $('#recent__formula').text(formula);
  $('#recent__answer').text(answer);  

  $('#screen__formula').text(formula);
  $('#screen__answer').text(answer);
  
  $('.list__past-items:first-child').remove();
  
});



$('.setting__mood').on('click', function(){
  $(this).toggleClass('swich');
  $('#cal').toggleClass('swich');
});



