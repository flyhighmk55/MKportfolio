$('div.input__btn').on('click', function(){
  var value = $(this).attr('value');
  var text = $(this).text();

  
  $('#screen__formula').append(text);
  $('#recent__formula').append(value);
});




$('#submit').on('click', function(){
  
  var formula = $('#recent__formula').text();
  console.log(formula);
  
  //1. 완성된 수식인지 확인하기
  
  
  //괄호가 있는 경우
  if (formula.includes('(') ){
    //각 괄호의 갯수를 구한다.
    var bracket_open_l = formula.split('(').length -1;
    var bracket_close_l = formula.split(')').length -1;
    console.log(bracket_open_l);
    console.log(bracket_close_l);
    
    //error1. 뒷괄호 수가 모자르는 경우 (수식 수정)
    if ( bracket_open_l > bracket_close_l ){
      
      //추가해야할 뒷괄호 갯수를 구하여 그만큼의 뒷괄호를 수식 끝에 추가한다.
      var bracket_add_l = bracket_open_l - bracket_close_l;
      console.log(bracket_add_l);
      for (var n = 1; n <= bracket_add_l; n++){
        $('#recent__formula, #screen__formula').append(')');
      }
      //뒷괄호를 추가하여 완성된 수식을 다시 구한다.
      formula = $('#recent__formula').text();
        console.log(formula);
    }
    //error2. 앞괄호가 모자르는 경우 (연산 거부)
    else if ( bracket_open_l < bracket_close_l ) {
      alert('수식이 맞는지 확인하세요.');
    }
    
    
    
    var arr = formula.split('(',')');

//   var en = arr.split(')');
//    var sub = arr.substring(st, en)
//    
    console.log(arr);
//    console.log(en);
    
    
    arr2  = arr.filter(function(item) {
      return item !== null && item !== undefined && item !== '';
    });
    console.log(arr2); 
    

    
    
//    for(var n = 0; n <= bracket_open_l; n++){
//      var bracket_open_i = formula.indexOf('(');
//      var bracket_close_i = formula.indexOf(')');
//      
//      var bracket_s = formula.substring(bracket_open_i, bracket_close_i);
//      console.log(bracket_s);
//    }
    
    
  } else {
    console.log(3);
  }
  
  
  
  

});


//
//
//$('#allclear').on('click', function(){
//  //스크린 수식 지우기
//  $('.screen__formula').empty();
//  $('.screen__answer').empty();
//  
//  //최근 리스트 값 가져와서 지난 리스트로 넘기기
//  var formula = $('#recent__formula').text();
//  var answer = $('#recent__answer').text();
//  
//  $('#list__past').prepend('<div class="list__past-items"><div class="past__formula list__item">'+formula+'</div><div class="list__eq">=</div><div class="past__answer list__item">'+answer+'</div></div>');
//  
//  //최근 리스트 값 지우기
//  $('#recent__formula').empty();
//  $('#recent__answer').empty();
//});





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



