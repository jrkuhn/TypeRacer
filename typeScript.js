var begin = document.getElementById("begin");
var expert = document.getElementById("expert");
var timer = document.getElementById("time");
var score = document.getElementById("score");
var words = document.getElementById("words");
var correct = document.createElement("green");
var wrong = document.createElement("red");
var currWord= "";
var corr = "";
var err = "";
var clear = "";
count = 0;
index = 0;
points = 0;
gameover = 0;

begin.onclick = function()
{
    points = 0;
    score.innerHTML = 0;
    count = 1;
    index = 0;
    gameover = 0;

    timer.innerHTML = 60;
   interval = setInterval(function()
   {
       timer.innerHTML = 60 - count;
       count++;
       if(timer.innerHTML == -1)
       {
           clearInterval(interval);
           timer.innerHTML = 0;
           alert("GAME OVER\nYou're score was: " + points);
           gameover = 1;
           begin.value= "Try Again";
           $("#begin").show();
       }
   }, 1000);

   words.innerHTML = getWords();
   currWord = words.innerHTML;
   corr = "";
   err = "";
   clear = "";
};

$(document).keypress(function(e){
    if(gameover == 0) {
        var key = String.fromCharCode(e.which);

        if (key == currWord.charAt(index)) {


            corr += '<mark class="correct">'+ currWord.charAt(index) + '</mark>';
            clear = currWord.substring(index+1);
            words.innerHTML = corr + clear;


            points += 10;
            score.innerHTML = points;
            index++;

            if (key == '.') {
                words.innerHTML = getWords();
                currWord = words.innerHTML;
                corr = "";
                points += 50;
                score.innerHTML = points;
                index = 0;
            }
        }
        else {
            err = '<mark class="wrong">'+ currWord.charAt(index) + '</mark>';
           // points -= 10;
            //score.innerHTML = points;
            clear = currWord.substring(index+1);
            words.innerHTML = corr + err + clear;
        }
    }

});

function getWords()
{
    var last;
   var rand = Math.floor((Math.random() * 30));


    list = ["The hubris of poetry is doctrinal in its tenacity.",
            "The trendiness of interdependence is almost trivial in its integrity.",
            "Those computer programmers made him some coffee.",
            "That journalist elected Bill captain of our team.",
            "Around an economy orbits an unknown.",
            "A glittering gem is not enough.",
            "He ran out of money, so he had to stop playing.",
            "They arrived there early and secured great seats.",
            "Let me help you with your baggage.",
            "I have work to do, but I'm sick.",
            "Lets all be unique together.",
            "The earthquake was a magnitude seven.",
            "The stranger officiates the meal.",
            "Don't step on the broken glass.",
            "Check back tomorrow, I may assist you then.",
            "She wrote him a long letter, but he didn't read it.",
            "I love eating chowder and grilled cheese.",
            "I currently have 4 windows open up.",
            "We need to rent a room for our party.",
            "Andrew's uncle was surfing quickly.",
            "We were driving last night at eleven.",
            "The foresight of animosity is socialistic in its relativity.",
            "We will develop advanced intelligence someday.",
            "You're dedicated to helping research technology.",
            "8 things professors are using against you.",
            "Things that make fathers eat more vegetables.",
            "Our neighbors don't know about the new lawnmower.",
            "This would be some extra code, but it's worth it.",
            "I know where the new post office is located.",
            "She was having such a fantastic time at the beach."];

    return list[rand];
}