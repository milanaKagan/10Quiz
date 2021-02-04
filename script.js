//const parameters
const $body = document.getElementsByTagName("body")[0];
const $startPage = document.getElementById('strat-page');
const $gamePage = document.getElementById('game-page');
const $restartPage = document.getElementById('restart-page');
const $errorMassage = document.getElementById('error-message');
const $goAnimation = document.getElementById('go-animation');
const $startBtn = document.getElementById('start-button');

//paramerers
let $color = null;
let $grammar = null;
let $math = null;

let goIndex = 1;

let colorQuestions = {orange:'blue', yellow: 'green', red: 'red', brown: 'black', green: 'green', white : 'yellow', blue: 'blue', orange: 'orange', purple: 'orange',  brown: 'brown'};
let colorResults = [false,false,true,false,true,false,true,true,false,true];
let mathQuestions = ["5 > 3","3 = 8","6 >= 5","1 < 0","0 = 0","2 < 7","8 > 3","9 = 6","2 = 2","4 >= 4"];
let mathResults = [true,false,false,false,true,true,true,false,true,false];
let grammarQuestions = ["mother","fater","tabel","label","ecqual","canyon","short","langwhitch","karate","weazer"];
let grammarResults = [true,false,false,true,false,false,true,false,true,false];




//functions
const init = () =>{
    $startPage.style.display = 'flex';
    $errorMassage.style.visibility = "hidden";
    $gamePage.style.display = 'none';
    $restartPage.style.display = 'none';
    $goAnimation.style.display = 'none';
}
const gameStart = () =>{
let counter = 1;


}
const goAnimation = () =>{

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

const startPressed = () =>{
    let $color = document.getElementById('color');
    let $grammar = document.getElementById('grammar');
    let $math = document.getElementById('math');

    if(!$color.checked && !$grammar.checked && !$math.checked)
         $errorMassage.style.visibility = "visible";

    else{
        $errorMassage.style.visibility = "hidden";
        $startPage.style.display = 'none';
        $restartPage.style.display = 'none';
        goAnimation();

    }
       
}

init();

//listeners
$startBtn.addEventListener('click',startPressed);
