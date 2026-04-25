const item = document.querySelectorAll(".item");
let current = 0;

setInterval(() =>{
    item[current].classList.remove("visible");
    current = (current + 1) % item.length;
    item[current].classList.add("visible");
}, 4000);