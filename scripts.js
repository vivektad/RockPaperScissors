function computerPlay() {
    let array = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    return array[randomNumber];
}

