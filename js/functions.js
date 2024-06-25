//Simple function
let a;
function function1(){
a=1=3;
console.log("function caculated and print value=",a);
}
//With Argument
function sum(b,c){
console.log(`Sum of ${a} and ${c} is ${a+c}`);
}
let b = prompt("enter first mumber");
let c = prompt("enter second mumber");
sum(b,c);
//arrowFunction
let arrowSum=(d,e)=>{
    return a+b;
};
console.log(`sum of 2 and 4 is ${arrowSum(2,4)}`);   