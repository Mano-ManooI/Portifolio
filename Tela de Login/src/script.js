const possibilityButton = document.getElementById("possibility");
const enterAccount = document.getElementById("enterAccount");
const input1 = document.getElementById("email");
const input2 = document.getElementById("pin");

function possibility(){
    const title = document.getElementById("title");

    if(document.title === "Login"){
        input1.value = "";
        input2.value = "";
        title.innerText = "Criar Nova Conta";
        document.title = "Sign Up";
        enterAccount.innerHTML = "Cadastrar";
        possibilityButton.innerHTML = "Já possui uma conta?";

    }else{
        input1.value = "";
        input2.value = "";
        title.innerText = "Entrar na Conta"
        document.title = "Login";
        enterAccount.innerHTML = "Entrar";
        possibilityButton.innerHTML = "Ainda não tem uma conta?";
    };
};

function register(){
    let email = input1.value.trim();
    const pin = input2.value.trim();
    email = email.slice().toLowerCase();

    if(email === "" || pin === ""){
        return;
    };

    console.log(`email: ${email} pin: ${pin}`)

    input1.value = "";
    input2.value = "";
}

window.addEventListener("DOMContentLoaded", (e) =>{
    e.preventDefault();

    possibilityButton.addEventListener("click", () =>{
        possibility();
    });
    
    enterAccount.addEventListener("click", () =>{
        register();
    });
});