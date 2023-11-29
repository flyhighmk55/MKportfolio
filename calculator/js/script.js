$('div.input__btn').on('click', function(){
  var value = $(this).attr('value');
  var text = $(this).text();

  
  $('.screen__formula').append(text);
  $('#recent__formula').append(value);
  
});





$('#allclear').on('click', function(){
  $('.screen__formula').empty();
  $('.list__recent').text;
  
});


$('#clear').on('click', function(){
  var text = $('.screen__formula').text();
  console.log(text);
  var get = text.slice(0, -1);
    console.log(get);
  
  $('.screen__formula').text(get);
  
  
   var text = $('.screen__formula').text();
  console.log(text);
  var get = text.slice(0, -1);
    console.log(get);
  
  $('.screen__formula').text(get);
  
  
  
  
});





$('#submit').on('click', function(){
  var text = $('.list__recent').text();
    console.log(text);
  var number = eval(text);
  $('.screen__answer').text(number);
  
});