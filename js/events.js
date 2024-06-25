let btn = document.querySelector("#btn");
btn.onclick = (evt) => {
    alert("button was clicked");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};
btn.ondblclick = (evt) => {
    //alert("button was double clicked");
    //events properties
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX. evt.clientY);
    //console.log(evt.clientY);
};
div = document.querySelector(".box3");
div.onmouseover = (evt) => {
    console.log("You hover in box");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", (handler1) => {
    console.log("eventListener : handler1", handler1.target);   
})    
btn1.addEventListener("click", (handler2) => {
    console.log("eventListener : handler 2", handler2.target);
})
const handler3 = () =>{
    console.log("eventListener : handler 3");
}
btn1.addEventListener("click", handler3);
btn1.removeEventListener("click", handler3);
let modeBtn = document.querySelector("#modeBtn");
let mode = "light";
//console.log(body.tagName);

    modeBtn.addEventListener("click", () =>{
        if(mode == "light"){
            //console.log("light");
            mode = "dark"
            modeBtn.textContent = "light mode";
            modeBtn.className = "light";
            document.querySelector("body").className = "dark";
            //Using body style bodyground color property.
            //document.querySelector("body").style.backgroundColor = "black";
        }else{
            //console.log("dark");
            mode = "light";
            modeBtn.textContent = "dark mode";
            modeBtn.className = "dark";
            document.querySelector("body").className = "light";
            //Using body style background color property.
            //document.querySelector("body").style.backgroundColor = "white";
        }              
    });
