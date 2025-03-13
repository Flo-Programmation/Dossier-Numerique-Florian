let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let togg4 = document.getElementById("togg4");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");

let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");


togg1.addEventListener("click", () => {
    if(getComputedStyle(d1).visibility != "visible"){
    d1.style.visibility = "visible";
    d1.style.position = "relative";
        p1.style.visibility ="hidden";
        p1.style.position ="absolute";
} else {
    d1.style.visibility = "hidden";
    d1.style.position = "absolute";
        p1.style.visibility ="visible";
        p1.style.position ="relative";
}
});

togg2.addEventListener("click", () => {
    if(getComputedStyle(d2).visibility != "visible"){
    d2.style.visibility = "visible";
    d2.style.position = "relative";
        p2.style.visibility ="hidden";
        p2.style.position ="absolute";
} else {
    d2.style.visibility = "hidden";
    d2.style.position = "absolute";
    p2.style.visibility ="visible";
    p2.style.position ="relative";
}
});

togg3.addEventListener("click", () => {
    if(getComputedStyle(d3).visibility != "visible"){
    d3.style.visibility = "visible";
    d3.style.position = "relative";
    p3.style.visibility ="hidden";
    p3.style.position ="absolute";
} else {
    d3.style.visibility = "hidden";
    d3.style.position = "absolute";
    p3.style.visibility ="visible";
    p3.style.position ="relative";
}
});

togg4.addEventListener("click", () => {
    if(getComputedStyle(d4).visibility != "visible"){
    d4.style.visibility = "visible";
    d4.style.position = "relative";
    p4.style.visibility ="hidden";
    p4.style.position ="absolute";
} else {
    d4.style.visibility = "hidden";
    d4.style.position = "absolute";
    p4.style.visibility ="visible";
    p4.style.position ="relative";
}
});
