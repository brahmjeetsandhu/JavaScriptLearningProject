console.log("DOM : Documemt Object Model");
//1. alert("Say Hello to DOM");
console.log(document);
console.dir(document);
//.2 Get element in a variable
let para1 = document.getElementById("para1");//p  
console.log(para1);
console.dir(para1);
//3. Set property of element
para1.style.color="yellow";
let g = "Classic example text changed dynamically";
//4. Set innertext of element
para1.innerText = g;
console.log(para1.innerText);
//5. access elements by Id
let btn = document.getElementById("button");
btn.style.color="red";
let backtohome = document.getElementById("backtohome");

//Access innertext
console.log(backtohome.innerText);

//6. on click button Function
function changelinkcolor(){
    console.log("fun code exe.");
    if(btn.style.color === "pink"){
   btn.style.color = "white";
   backtohome.style.color = "red";
   document.body.style.backgroundColor = "grey"
    }else{
    btn.style.color= "pink";
    backtohome.style.color = "pink";
    document.body.style.backgroundColor = "pink";
    }   
}
//7. access elements by Class
let para2 = document.getElementsByClassName("para2");
console.log(para2);
console.dir(para2);
for( para4 in para2){
    console.log("loop working")
    para4.color = "white";
}


