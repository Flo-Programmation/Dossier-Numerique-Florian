
let btn_close = document.getElementById("btn-close");

let btn_div1 = document.getElementById("btn_div1");
let btn_div2 = document.getElementById("btn_div2");

let d_div1 = document.getElementById("d_div1");
let d_div2 = document.getElementById("d_div2");


btn_close.addEventListener("click", () => {
    if(getComputedStyle(d_div1).visibility != "visible"){
        d_div1.style.visibility = "visible";
    }  
    else{
        d_div1.style.visibility = "hidden";
        d_div2.style.visibility = "hidden";
    }
});
btn_close.addEventListener("click", () => {
    if(getComputedStyle(d_div2).visibility != "visible"){
        d_div2.style.visibility = "visible";
    }  
    else{
        d_div1.style.visibility = "hidden";
        d_div2.style.visibility = "hidden";
    }
});


btn_div1.addEventListener("click", () => {
    if(getComputedStyle(d_div1).visibility != "visible"){
        d_div1.style.visibility = "visible";
    } else {
        d_div1.style.visibility = "hidden";
    }
});

btn_div2.addEventListener("click", () => {
    if(getComputedStyle(d_div2).visibility != "visible"){
        d_div2.style.visibility = "visible";
    } else {
        d_div2.style.visibility = "hidden";
    }
});