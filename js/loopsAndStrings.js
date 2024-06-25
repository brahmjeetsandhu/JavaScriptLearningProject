//using for loop
console.log("using for loop");
for(let i=0;i<5;i++){
    console.log("for loop pass: ", i+1);
}
//using while loop
let n = 0;
while(n<5){
console.log("While loop pass : ", n+1)
n++
}
// Do-while loop
let j=0;
do{
    console.log("do-while loop pass : ", j+1);
    j++;
}while(j<5);
//using for-of loop for string
console.log("Using for-of loop in strings");
let string = "this is my learning js"
for(let char of string){
    console.log(char);
}
//using for in loop for objects
console.log("using for-in loop in objects.");
const product={
    name : "Bal Pen",
    price: 5
}
for(let key in product){
    console.log("Product Key of for loop pass : ", key);
    console.log('value of',key, 'is', product[key]);
}
//using string Properties and methods
//Block String
{
    let string = "this is a java script string";
    let suffixToString = "SUFFIX  TO STRING";
    let PrefixToString = "PREFIX TO STRING";   
    console.log("Length of string is: ",string, "is", string.length);
    console.log("String concat function : ", string.concat(PrefixToString,string,suffixToString));
    console.log("String toUpperCase", string.toUpperCase());
    console.log("String toLowerCase", string.toLowerCase());
    console.log("String trim: remove white spaces from start and end", string.trim());
    console.log("string replace : ", string.replace("this", "replace"));
}

