//const parameters
const $body = document.getElementsByTagName("body")[0];
const $startPage = document.getElementById('strat-page');
const $gamePage = document.getElementById('game-page');
const $restartPage = document.getElementById('restart-page');
const $errorMassage = document.getElementById('error-message');
const $goAnimation = document.getElementById('go-animation');
const $startBtn = document.getElementById('start-button');
const $questionNumber = document.getElementById('question-number');
const $question = document.getElementById('question');
const $yesBtn= document.getElementById('yes');
const $noBtn= document.getElementById('no');
const $score= document.getElementById('score');

//paramerers
let $color = null;
let $grammar = null;
let $math = null;

let goIndex = 1;
let counter = 0;
let noTime = null;
let score = 0;
let result = null;

let colorWord = null;
let colorActual = ["orange", "yellow", "red", "brown", "green", "white", "blue", "purple", "black", "pink"];

let mathQuestions = null;
let mathResults = null;

let grammarQuestions = null;
let grammarResults = null;




//functions

const initQuestiosnData = () =>{
    colorWord = ["orange", "yellow", "red", "brown", "green", "white", "blue", "purple", "black", "pink"];

    mathQuestions = ["5 > 3","3 = 8","6 >= 5","1 < 0","0 = 0","2 < 7","8 > 3","9 = 6","2 = 2","4 >= 4"];
    mathResults = [true,false,false,false,true,true,true,false,true,false];

    grammarQuestions = ["mother","fater","tabel","label","ecqual","canyon","short","langwhitch","karate","weazer"];
    grammarResults = [true,false,false,true,false,false,true,false,true,false];
}

const init = () => {
    $startPage.style.display = 'flex';
    $errorMassage.style.visibility = "hidden";
    $gamePage.style.display = 'none';
    $restartPage.style.display = 'none';
    $goAnimation.style.display = 'none';
   
    initQuestiosnData();  
}


const chooseQuestion = (questionType) => {

  let index = null;
  let colorIndex = null; 
  let result = null;
    if(questionType == "color"){
     index = Math.floor(Math.random() * colorWord.length);
     colorIndex = Math.floor(Math.random() * colorActual.length);
     result = [colorWord[index], colorWord[colorIndex], colorWord[index] == colorWord[colorIndex]];
     colorWord.splice(index,1);
     return result;
  }
  if(questionType == "math"){
    index = Math.floor(Math.random() * mathQuestions.length);
     result = [mathQuestions[index], mathResults[index]];
     mathQuestions.splice(index,1);
     mathResults.splice(index,1);
     return result;
  } 
  if(questionType == "grammar"){
    index = Math.floor(Math.random() * grammarQuestions.length);
    result = [grammarQuestions[index], grammarResults[index]];
    grammarQuestions.splice(index,1);
    grammarResults.splice(index,1);
    return result;
  }  

}
const gamesettings = ()=> {
    let choiseIndex = -1;
    let choises = [];
     if($color.checked)
     {
        choiseIndex++;
        choises[choiseIndex] = "color";
     }
     if($grammar.checked){
        choiseIndex++;
        choises[choiseIndex] = "grammar";
     }
     if($math.checked){
        choiseIndex++;
        choises[choiseIndex] = "math";
     }
     return choises;
}
const gameStart = () => {
    let choiseIndex = null;
    let choises = gamesettings();
    
    if(counter < 10){
        counter++;
        $questionNumber.innerHTML = (counter) + "/10";
        choiseIndex = Math.floor(Math.random() * choises.length);
        
        let question =null;
        question = chooseQuestion(choises[choiseIndex]);
        if(choises[choiseIndex] == "color"){
            $question.innerHTML = question[0];
            $question.style.color = question[1];
            result = question[2];
        }
        else{

            $question.style.color = "#e6cf34";
            $question.innerHTML = question[0];
            result = question[1];
        }
        
        noTime = setTimeout(gameStart,5000);
    }
    else{
        clearTimeout(noTime);
        noTime = null;
        counter = 0;
        result = null;
        $gamePage.style.display = 'none';
        $restartPage.style.display = 'block';
        $score.innerHTML = score;
        score = 0;
    }

}

const goAnimation = () => {

    if(goIndex < 4){
        $goAnimation.style.display = 'block';
        $goAnimation.innerHTML = goIndex;
        goIndex++;
        setTimeout(goAnimation,1000);
        }
        else if(goIndex == 4) {
            $goAnimation.style.color = '#4a8943';
            $goAnimation.innerHTML = "GO";
            goIndex++;
            setTimeout(goAnimation,1300);
        }
        else{
        goIndex = 1;
        $goAnimation.style.display = 'none';
        $gamePage.style.display = 'flex'; 
        gameStart();    
        }

}

const startPressed = () => {
    $color = document.getElementById('color');
    $grammar = document.getElementById('grammar');
    $math = document.getElementById('math');

    if(!$color.checked && !$grammar.checked && !$math.checked)
         $errorMassage.style.visibility = "visible";

    else{
        $errorMassage.style.visibility = "hidden";
        $startPage.style.display = 'none';
        $restartPage.style.display = 'none';
        goAnimation();
    }
       
}

const yesCheck = () => {

    if (result == true)
    {
        score++;
    }
    clearTimeout(noTime);
    gameStart();

}


const noCheck = () => {

    if (result == false)
    {
        score++;
    }
    clearTimeout(noTime);
    gameStart();
}

init();

//listeners
$startBtn.addEventListener('click',startPressed);
$yesBtn.addEventListener('click',yesCheck);
$noBtn.addEventListener('click',noCheck);
