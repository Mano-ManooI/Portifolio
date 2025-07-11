function newPin(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const specialChar = "@#$%&";

    const allChar = letters + numbers + specialChar;
    let result = "";
    const allLengthChar = allChar.length;
    for(let i = 1; i <= 8; i++){
        const indexChar = Math.floor(Math.random() * allLengthChar);
        result += allChar.charAt(indexChar);
    };
    return result;
};

const pinLocation = document.getElementById("pinLocation");
const generetePin = document.getElementById("generetePin");
const copyPin = document.getElementById("copyPin");
const copyCheck = document.getElementById("copyCheck");

generetePin.addEventListener("click", (event) => {
    event.preventDefault();

    pinLocation.innerText = newPin(); 
    copyPin.style.display = "block"; 

    if (generetePin.innerHTML === "Gerar Senha") {
        generetePin.innerHTML = "Gerar Novamente";
    }
});

copyPin.addEventListener("click", (event) => {
    event.preventDefault();

    const pin = pinLocation.innerText;
    navigator.clipboard.writeText(pin).then(() => {
        copyCheck.classList.add("correct");
        copyCheck.classList.remove("incorrect");
        copyCheck.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        copyCheck.style.display = "block";
        copyPin.style.display = "none";

        generetePin.disabled = true;
        let originalGeneratePinText = generetePin.innerHTML; 
        generetePin.innerHTML = "Aguarde"; 

        setTimeout(() => {
            copyCheck.style.display = "none"; 
            copyPin.style.display = "block"; 
            
            generetePin.disabled = false;
            generetePin.innerHTML = originalGeneratePinText;
        }, 1100);
    }).catch(() => {
        copyCheck.classList.add("incorrect");
        copyCheck.classList.remove("correct");
        copyCheck.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        copyCheck.style.display = "block";
        copyPin.style.display = "none";

        generetePin.disabled = true;
        let originalGeneratePinText = generetePin.innerHTML;
        generetePin.innerHTML = "Aguarde...";

        setTimeout(() => {
            copyCheck.style.display = "none";
            copyPin.style.display = "block";

            generetePin.disabled = false;
            generetePin.innerHTML = originalGeneratePinText;
        }, 1100);
    });
});

const ManoManooI = document.getElementById("ManoManooI");
ManoManooI.addEventListener("click", () => {
    open(`https://github.com/Mano-ManooI`)
})