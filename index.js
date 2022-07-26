

function diceOnePicker(){
    randomNumber1 = Math.floor((Math.random() * 6)+ 1);
    imageOne = `images/dice${randomNumber1}.png`;
    document.querySelector(".img1").setAttribute("src", imageOne);
}

function diceTwoPicker(){
    randomNumber2 = Math.floor((Math.random() * 6)+ 1);
    imageTwo = `images/dice${randomNumber2}.png`;
    document.querySelector(".img2").setAttribute("src", imageTwo);

    if(randomNumber1 > randomNumber2)
        document.querySelector("h1").innerHTML = "Player 1 Wins⛳️";
    else if(randomNumber1 < randomNumber2)
        document.querySelector("h1").innerHTML = "Player 2 Wins⛳️";
    else if(randomNumber1 === randomNumber2)
        document.querySelector("h1").innerHTML = "Draw!💩";    
}

