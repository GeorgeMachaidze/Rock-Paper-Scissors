var options = ["aiStone","aiScissors","aiNet"];

var userOptions = [];
var aiOptions = [];


$(".start").click(function startGame(){
  var userChosenOption = $(this).attr("id");
  var audio = new Audio("sounds/klick.mp3")
  audio.play();
  $("#"+ userChosenOption).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  userOptions.push("ai" + userChosenOption)
  aiOption();
  logic();
  userOptions = [];
  aiOptions = [];

});



function aiOption(){
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenOption = options[randomNumber];
  animatePress(randomChosenOption);
  aiOptions.push(randomChosenOption);
}

function logic(){
  if(userOptions[0] === aiOptions[0]){
    draw();
  }else if(userOptions[0] == "aiStone"){
    if(aiOptions[0] == "aiNet"){
      lose();
    }else{
      win();
    }
  }else if(userOptions[0] == "aiScissors"){
    if(aiOptions[0] == "aiStone"){
      lose();
    }else{
      win();
    }
  }else if(userOptions[0] == "aiNet"){
    if(aiOptions[0] == "aiScissors"){
    lose();
  }else{
    win();
  }
}
}



function animatePress(randomChosenOption){

  $("#"+randomChosenOption).addClass("pressed");
  setTimeout(function(){
  $(".userBtn").removeClass("pressed");
},1500);
  };

  function draw(){
    $("h1").text("Draw");
      $("body ").css("background-color","#D8E9A8")
      var audio = new Audio("sounds/draw.mp3")
      audio.play();

  }
  function win(){
    $("h1").text("You Win");
      $("body").css("background-color","#4E9F3D")
      var audio = new Audio("sounds/win.mp3")
      audio.play();
  }
  function lose(){
    $("h1").text("You Lose");
      $("body").css("background-color","#630606")
      var audio = new Audio("sounds/lose.mp3")
      audio.play();
  }
