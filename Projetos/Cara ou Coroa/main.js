const mensagen = document.getElementById("mensagen")
mensagen.textContent = "Cara"
mensagen.style.color = "Blue"
function Coin(){
    const Randomnumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1

    
    const cara = "img/CARA.png"
    const coroa = "img/COROA.png"
    const img = document.querySelector("img")
    let showImg = true
    

    const interval = setInterval(() => {
        if(showImg){
            img.src = coroa
            mensagen.textContent = ""
        }else{
            img.src = cara
            mensagen.textContent = ""
        }
        showImg = !showImg
    }, 100);

    
 
    setTimeout(() => {
        clearInterval(interval)
        if(Randomnumber == 1){
            img.src = cara
            mensagen.textContent = "Cara"
            mensagen.style.color= "Blue"
        }else{
            img.src = coroa
            mensagen.textContent = "Coroa"
            mensagen.style.color= "Orange"
        }
    }, 2000);
}

