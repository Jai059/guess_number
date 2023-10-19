/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;*/

let secretNumber = Math.trunc(Math.random()*20)+1;


let score = 20;
let highscore = 0;


const check = document.querySelector('.check');
check.addEventListener('click',()=>{
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input
    if(!guess){
        document.querySelector('.message').textContent = 'No number!';

        //when player wins
    }else if(guess === secretNumber){
     
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = "#60b347";       
        document.querySelector('.number').style.width = '10rem';
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is too high
    }else if(guess>secretNumber){
        if(score>1){
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent = 'To high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        

        //when guess is too low
    }else if(guess<secretNumber){
        if(score>1){
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent = 'To Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
})

const again = document.querySelector('.again');

again.addEventListener('click',()=>{
    document.body.style.backgroundColor = "#222"
    document.querySelector('.number').style.width = '5rem';
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
})