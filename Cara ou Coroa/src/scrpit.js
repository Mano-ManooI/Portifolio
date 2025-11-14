const face = "./img/cara.png";
const crown = "./img/coroa.png";

const pointsFaceElement = document.getElementById("pointsFace");
const pointsCrownElement = document.getElementById("pointsCrown");

let pointsFace = 0;
let pointsCrown = 0;

const buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", () =>{    
    const resultImg = document.getElementById("result");
    const randomResult = Math.random() > 0.5 ? face : crown;
    resultImg.src = randomResult;
    
    if(randomResult === crown){
        pointsCrown++;
    }else{
        pointsFace++;
    };

    pointsCrownElement.innerText = pointsCrown;
    pointsFaceElement.innerText = pointsFace;
});

const creditsManoManooI = document.getElementById("mano-manooi");
creditsManoManooI.addEventListener("click", () =>{
    window.open("https://github.com/Mano-ManooI");
});