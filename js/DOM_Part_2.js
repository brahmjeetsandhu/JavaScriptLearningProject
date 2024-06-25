console.log("DOM Part-2 off 2");
console.log("attribute methods")
let div = document.querySelector("li");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
//using querry selector to fetch div on bases of its class
let para = document.querySelector(".para2");
console.log(para);
//using get attribute method to get class
let paraClass = para.getAttribute("class");
console.log(paraClass);
let paraName = para.getAttribute("name");
console.log(paraName);
let box = document.querySelector("#box");
let boxclass = box.getAttribute("class");
console.log(boxclass);
//function without parameters
function changeBoxClass(){
   if(box.getAttribute("class")==="box1"){ 
    box.setAttribute("class", "box2");
    //newButton.style.visibility(true);
    }
   else{
   box.setAttribute("class","box1");
   //newButton.style.visibility(false);
    }
}
//append  : new element to a div : at the end in div
let newButton = document.createElement("button");
newButton.innerText = "appended Button"
console.log(typeof(newButton));
box.append(newButton);

//prepend :  new element to a div : at the end in div
let prependButton = document.createElement("button");
prependButton.innerText = "prepend Button"
console.log(typeof(prependButton));
box.prepend(prependButton);

//before : new element to a div : at the end in div
let beforeButton = document.createElement("button");
beforeButton.innerText = "before Button"
console.log(typeof(beforeButton));
box.before(beforeButton);

//after : new element to a div : at the end in div
let afterButton = document.createElement("button");
afterButton.innerText = "after Button"
console.log(typeof(afterButton));
box.after(afterButton);

//Insert before body
let headingH1 = document.createElement("h1");
headingH1.innerHTML = "<i>this is italic heading</i>";
document.body.prepend(headingH1);
headingH1.remove();





