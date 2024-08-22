let win_number = 19;
let user_guess = +prompt("Guess the number");
if (user_guess === win_number) {
    console.log("You guessed the right number");
} else {
    if (user_guess < win_number) {
        console.log("Your guess is low");
    } else {
        console.log("Your guess is high");
    }
}
