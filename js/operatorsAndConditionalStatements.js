//Practice Q1 : Enter a number, check if it is multiple by 5 or not.
console.log("Practice Q1 : Enter a number, check if it is multiple by 5 or not.");
let userNumber = prompt("enter a number")
console.log("You entered: ", userNumber);
if(userNumber%5==0){
    console.log("entered Number is divisible by 5.");
}
else{
    console.log("Entered number is not divisible by 5.");
}

//Practice Q2 : Write the code which can Grade students according to the scores.

console.log("Practice Q2 : Write a code which can code the students according to their score.");
let score = prompt("Enter score from 0 to 100");
let grade;
console.log("You entered : ", score);
if(score>=0 && score<=34){
    grade="D";
}else if(score>=35 && score<=50){
    grade="C";
}else if(score>=51 && score<=80){
    grade="B";
}else if(score>=81 && score<=100){
    grade="A"
}else{
    console.log("Please enter score from 0 to 100")
}
if(score>=0 && score<=100){
console.log("Your Grade is : ", grade);
}