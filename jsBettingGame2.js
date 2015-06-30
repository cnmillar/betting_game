(function(){

  var money = 100;
  $("#current_money").html("You have $" + money + " left.");
  $("#image").attr("src","http://img1.wikia.nocookie.net/__cb20120412051836/suburgatory/images/5/52/Happy_face.jpg")

  $("#restart").click(function(){
    money = 100;
    $("#current_money").html("You have $" + money + " left.");
    $("#computer_answer").html("")
    $("#user_guess").html("")
    $("#user_bet").html("")
    $("#image").attr("src","http://img1.wikia.nocookie.net/__cb20120412051836/suburgatory/images/5/52/Happy_face.jpg")
    $("#image").css("opacity", money/100);
  })

  $("#bet").on("input",function(input){
    $("#user_bet").html("You bet $" + input.target.value + ".")
  })

  $("#guess").on("input",function(input){
    $("#user_guess").html("You guessed " + input.target.value + ".")
  })

  $("#game_form").keypress(function(e){
    var key = e.which;
    if(key == 13)  // the enter key code
    {
    e.preventDefault();
    var bet = parseInt($("#bet").val());
    var guess = parseInt($("#guess").val());
    var answer = Math.floor(Math.random() * (10-1)) + 1;

    switch(guess){
      case answer === guess:
        money += 2 * bet;
      case Math.abs(answer - guess) === 1:
        money += bet;
      default:
        money -= bet;
    }

    $("#bet").val("");
    $("#guess").val("");
    $("#computer_answer").html("The answer was " + answer + ".");
    $("#current_money").html("You have $" + money + " left.");

    if (money < 75 && money > 50){
      $("#image").attr("src","http://orig05.deviantart.net/4dcd/f/2013/185/f/7/angry_emoticon_by_arth0289-d6c1dfn.jpg");
      $("#image").css("opacity", money/100);
    }
    else if (money <= 50){
      $("#image").attr("src","http://3.bp.blogspot.com/-8E5BGpaFsYg/U5VKI6hWPKI/AAAAAAAAICE/V8vSA0yY1qI/s1600/teary-eyed-emoticon.png");
      $("#image").css("opacity", money/100);
    }
    else if (money >= 100){
      $("#image").attr("src","http://rack.0.mshcdn.com/media/ZgkyMDEzLzAxLzEwLzU1L2Vtb3RpY29uczY0LmFiYzVmLmpwZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/9e7cb12a/c8f/emoticons-6401.jpg");
      $("#image").css("opacity", money/100);
    }
    else {
      $("#image").attr("src","http://img1.wikia.nocookie.net/__cb20120412051836/suburgatory/images/5/52/Happy_face.jpg");
      $("#image").css("opacity", money/100);
    }
  }
  });

})()
