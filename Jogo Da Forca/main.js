const words = ["Cubo", "Janela", "Avião", "Lápis", "Bateria", "Lua", "Javalí", "Chapéu", "Alterações", "Teclado"];
const random = Math.floor(Math.random() * words.length);
const wordLetters = document.getElementById("wordLetters");

function letter(){
    const letterClicked = event.target.innerText;
    console.log(`Letra clicada: ${letterClicked}`);
}

function init(){
    const wordLetter = words[random];
    const undesCore = "_".repeat(wordLetter.length).split("").join(" ");
    wordLetters.innerText = undesCore;
    console.log(wordLetter)
};

document.querySelectorAll("#letters").forEach(element => {
    element.addEventListener("click", letter)
});

init()