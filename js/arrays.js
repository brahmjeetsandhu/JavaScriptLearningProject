let Colors=["red", "blue", "pink"];
let studentMarks=[23,43,56,27,33];
console.log(Colors);
console.log(studentMarks);
let arrayConcat = Colors.concat(studentMarks);
console.log(arrayConcat)
//Calculate average of number in an array
let avg=[1,2,3,4,5,6,7,8,9];
console.log("Array elements are :",avg);
let result=0;
for(let value of avg){
    result += value;
}
console.log(`Average of elements of array is : ${result/avg.length}`);
console.log("Array Methods");
console.log("Push");
//Push to add at end 
let eatables = ["potato", "tomato", "eggPlant","chips"];
console.log(eatables);
console.log("Push to add - Pizza and iceCream.");
eatables.push("pizza", "iceCream");
console.log(eatables);
//Pop method
console.log("pop Method deletes end item and return it.");
console.log("deleted: ", eatables.pop());
//conCat method
console.log("conCat method");
let drinks =["cola","pepsi","soda"];
let conCatFoodItems = eatables.concat(drinks);
console.log(conCatFoodItems);
//unshift : add at end of array
console.log("unshift")
eatables.unshift("Roti");
console.log(eatables);
let delItem = eatables.shift();
console.log(delItem);



