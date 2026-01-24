const possibilityButton = document.getElementById("possibility");
const enterAccount = document.getElementById("enterAccount");
const input1 = document.getElementById("email");
const input2 = document.getElementById("pin");
input1.addEventListener("input", (event) =>{
    let valor = event.target.value;
    valor = valor.replace(/[^a-zA-Z0-9!?&@.]/g, "");
    event.target.value = valor;
});

function possibility(){
    const titleTag = document.getElementById("title");
    const informationAccount = document.getElementById("informationAccount");

    if(document.title === "Login"){
        input1.value = "";
        input2.value = "";
        informationAccount.innerText = "Conta criada com sucesso!";
        titleTag.innerText = "Criar Nova Conta";
        document.title = "Sign Up";
        enterAccount.innerHTML = "Cadastrar";
        possibilityButton.innerHTML = "Já possui uma conta?";

    }else{
        informationAccount.innerText = "Conta acessada com sucesso!";
        titleTag.innerText = "Entrar na Conta";
        document.title = "Login";
        enterAccount.innerHTML = "Entrar";
        possibilityButton.innerHTML = "Ainda não tem uma conta?";        
    };
};

const emailValue = document.getElementById("emailValue");
const pinValue = document.getElementById("pinValue");

function register(){
    let email = input1.value.trim();
    const pin = input2.value.trim();
    email = email.slice().toLowerCase();

    if(email === "" || pin === ""){
        return;
    };

    emailValue.innerText = email;
    pinValue.innerText = pin;
    
    const registerTag = document.getElementById("register");
    registerTag.style.display = "none";
    const popUp = document.getElementById("popUp");
    popUp.style.display = "flex";

    input1.value = "";
    input2.value = "";
}

const buttonCopy = document.getElementById("buttonCopy");
function copyElements(){
    const elementsAccount = "Email: " + emailValue.textContent + "; \Senha: " + pinValue.textContent;
    navigator.clipboard.writeText(elementsAccount);

    buttonCopy.innerHTML = 'Texto Copiado <i class="fa-solid fa-check"></i>';
    buttonCopy.style.borderRadius = "20px";
    buttonCopy.style.margin = "-15% -53% 10px 0";
    setTimeout(() =>{
        buttonCopy.innerHTML = '<i class="fa-regular fa-copy"></i>';
        buttonCopy.style.borderRadius = "50%";
        buttonCopy.style.margin = "-15% -85% 10px 0";
    }, 2500);
};

const reloadPage = document.getElementById("reloadPage");
const credits = document.getElementById("credits");
window.addEventListener("DOMContentLoaded", (e) =>{
    e.preventDefault();

    possibilityButton.addEventListener("click", () =>{
        possibility();
    });
    
    enterAccount.addEventListener("click", () =>{
        register();
    });
    reloadPage.addEventListener("click", () =>{
        location.reload();
    });
    buttonCopy.addEventListener("click", () =>{
        copyElements();
    });
    credits.addEventListener("click", () =>{
        open("https://github.com/Mano-ManooI");
    });
});