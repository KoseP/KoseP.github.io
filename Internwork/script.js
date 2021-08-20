var quiz = [{ques : "Szinonimák. Melyik az idős szó két szinonimája?",
            choose : [ " kortalan ",
                        " koros",
                        " idétlen",
                        " vén"],
           answer : 3},
            {ques : " Betűsor. Hány szóból áll a mondat?:",
            choose : [ " 6 ",
                       " 7 ",
                       " 8 ",
                       " 9 "],
           answer : 4},
            {ques : " Kakukktojás. Melyik szó nem illik a sorba?",
            choose : [ " padlás ",
                       " pince ",
                       " étkező ",
                       " kamra"],
           answer : 3},
                       {ques : " Apart from Venus, which planet rotates from east to west?|",
            choose : ["Jupiter",
                       " Mars",
                       " Uranus "],
           answer : 3},
           {ques : " Which famous world leader was accused at the Rivonia Trial?",
            choose : [
                       "Martin Luther King",
                       " Subhas Chandra Bose",
                       " Nelson Mandela "],
           answer : 3},






];


var i=0;
var j=0;
var score =0;
var currentQuestion= 0
$(document).ready(function()
 {
  $(".quizMessage").hide();
  $(".resetButton").hide();
  dispques();
  currentQuestion++;
  $(".nextButton").on("click",function()
   {
    check = $("input[type='radio']:checked").val();
    if(check==undefined)
      {
        $(".quizMessage").text("Answer the question to complete...");
        $(".quizMessage").show();
      }
    else
    {
      value = $("input[type='radio']:checked").val() ;
       ans = quiz[currentQuestion-1].answer;
     if(value == ans)
     {
        score = score+1;}
      if(quiz.length<=currentQuestion)
       {
                 $("p").text("your current score : "+ score + "/" + quiz.length);
        }
    else
      {
      dispques();
     currentQuestion++;}
      }
      });
});
function dispques()
{
  $(".quizMessage").hide();
  var choiceList = $(document).find(".quizContainer > .choiceList");
      i = currentQuestion ;
       var question = quiz[i].ques;
       $(".question").text(question);
       var choice = quiz[i].choose;
       $(".choiceList").find("li").remove();
       for(j=0;j<choice.length;j++)
         {    $('<li><input type="radio" value=' + j + ' name="r1" />'+choice[j]+'</li>' ) . appendTo(choiceList);
           }
       }
