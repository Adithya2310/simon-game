var gamePattern=[]
var buttonArray=["red","blue","green","yellow"];
var started=false;
var userClickedPattern=[]
var level=0;

$(document).keydown(function(){
    if(!started){
        nextSequence();
        started=true;
    }
});
$(".btn").click(function(){
    var userChooseButton=$(this).attr("id");
    userClickedPattern.push(userChooseButton);
    console.log(userChooseButton);
    var clickAudio=new Audio("sounds/"+userChooseButton+".mp3");
    clickAudio.play();
    clickAnimation(userChooseButton);
    checkAnswer(userClickedPattern.length-1);
})
function nextSequence()
{
    userClickedPattern=[]
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber=Math.floor((Math.random()*10))%4;
    var randomChoosenColor=buttonArray[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+randomChoosenColor+".mp3");
    audio.play();
}
function clickAnimation(button){
    $("#"+button).addClass("pressed");
    setTimeout(() => {
        $("#"+button).removeClass("pressed");
    }, 100);
    
}
// a function to verufy the clicked button
function checkAnswer(index)
{
    if(userClickedPattern[index]===gamePattern[index])
    {
        console.log("sucess");
        if(index===gamePattern.length-1)
        {
            setTimeout(function(){nextSequence();},1000);
        }
    }
    else{
        console.log("wrong");
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("#level-title").text("gameover press any key to restart");
        startover();
    }
}
// to start over the game again
function startover()
{
    gamePattern=[];
    started=false;
    level=0;
    userClickedPattern=[]; 
}

