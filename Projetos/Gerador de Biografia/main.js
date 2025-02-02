const input1 = document.getElementById("name")
input1.addEventListener("input", () =>{
    input1.value = input1.value.replace(/[^a-zA-ZÀ-ÿ, s]/g, "")
})
const input2 = document.getElementById("age")
input2.addEventListener("input", () =>{
    input2.value = input2.value.replace(/\D/g, "")
    if(input2.value == 0){
        input2.value = ""
    }
    if(parseInt(input2.value) > 110){
        input2.value = "110"
    }
    
})


function go(){
    let name = input1.value.trim()
    name = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
    const age = input2.value

    const select = document.getElementById("genery")
    const playerSelection = select.value
    
    if(playerSelection === "" || name === "" || age === ""){
        const errorInfo = document.getElementById("errorInfo")
        errorInfo.textContent = "Preencha todos os campos corretamente!"
        setTimeout(() => {
            errorInfo.textContent = ""
        }, 1500);
    }else{
        const step1 = document.getElementById("step1")
        if(step1){
            step1.remove()
        }

        const text = document.getElementById("text")
        text.style.border = "1px solid #ccc"
        if(playerSelection == "Masculino" && age >= 18){
            text.textContent = "Chegando à maioridade, eu, " + name + ", um rapaz de " + age + " anos, estou em uma fase de transição, onde os desafios se tornam maiores, mas também as oportunidades se ampliam. Como homem, estou aprendendo a assumir responsabilidades e a lidar com as escolhas que moldarão meu futuro. Cada passo me ensina mais sobre perseverança, autoconfiança e o que significa alcançar meus objetivos. Busco crescer em todas as áreas da minha vida, seja na minha carreira, nos relacionamentos ou no meu próprio desenvolvimento pessoal. Sei que a jornada é longa, mas estou determinado a continuar aprendendo e a enfrentar as adversidades com coragem e disciplina. Cada decisão agora tem mais peso, mas também me aproxima mais do homem que quero me tornar."
        }else if(playerSelection == "Masculino" && age < 18){
            text.textContent = "Ainda jovem, eu, " + name + ", um rapaz de " + age + " anos, estou vivendo uma fase de muitas descobertas e aprendizados. Como rapaz, estou começando a entender melhor minhas responsabilidades e o que significa construir meu próprio caminho. A cada desafio, aprendo mais sobre quem sou e sobre o que quero para o meu futuro. Busco crescer e me desenvolver, seja nos estudos, nas amizades ou nas minhas próprias paixões. Valorizo os momentos de lazer, mas também me esforço para ser mais focado nas minhas metas. Sei que essa etapa da minha vida está apenas começando e que cada escolha me aproxima mais do homem que quero ser."
        }else if(playerSelection == "Feminino" && age >= 18){
            text.textContent = "Chegando à maioridade, eu, " + name + ", uma mulher de " + age + " anos, estou vivenciando uma fase cheia de desafios e novas descobertas. Como mulher, estou aprendendo a equilibrar minha independência com as responsabilidades que vêm com essa idade. Cada dia traz novas oportunidades para crescer, tanto pessoal quanto profissionalmente. Busco ser mais assertiva nas minhas escolhas e abraçar as mudanças que me ajudam a me tornar a mulher que desejo ser. Com coragem e determinação, enfrento os obstáculos que surgem e celebro as vitórias que me fazem continuar a jornada. Valorizo os momentos de reflexão, aprendizado e também os momentos ao lado de outras mulheres que me inspiram. Sei que essa fase está apenas começando, e cada decisão que tomo me aproxima mais do que quero conquistar em minha vida."
        }else if(playerSelection == "Feminino" && age < 18){
            text.textContent = "Ainda jovem, eu, " + name + ", uma menina de " + age + " anos, estou descobrindo o mundo de uma maneira única. Nesta fase, estou aprendendo mais sobre minha identidade e sobre o que realmente quero para o meu futuro. A cada desafio, encontro forças que nem sabia que possuía e celebro as pequenas conquistas que me ajudam a crescer como pessoa. Embora ainda busque minha independência, estou construindo uma base sólida para ser quem eu quero ser. Tento equilibrar meus estudos com as experiências que moldam meu caráter e minha visão de mundo. Valorizo muito os momentos ao lado de amigas e familiares, e sou grata pelas oportunidades que surgem. Sei que, apesar de ser jovem, cada escolha que faço hoje me aproxima mais da pessoa que almejo me tornar."
        }

        const copyButtonLocation = document.getElementById("copyButtonLocation")
        const ButtonCoppy = document.createElement("button")
        ButtonCoppy.textContent = "Copiar"
        ButtonCoppy.addEventListener("click", copyText)
        function copyText(){
            navigator.clipboard.writeText(text.innerHTML)
            ButtonCoppy.id = "Ativo"
            ButtonCoppy.innerHTML = "Texto Copiado " + '<i class="fa-solid fa-check"></i>'
            setTimeout(() => {
                ButtonCoppy.textContent = "Copiar"
            }, 2000);
        }
        copyButtonLocation.appendChild(ButtonCoppy)
    }
    
}

document.getElementById("getValues").addEventListener("click", go)