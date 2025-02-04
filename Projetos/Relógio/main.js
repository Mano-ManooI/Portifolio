function updadeClock(){
    const hours = document.getElementById("hours")
    const minutes = document.getElementById("minutes")
    const seconds = document.getElementById("seconds")

    const now = new Date()
    const Hours = String(now.getHours()).padStart(2, "0")
    const Minutes = String(now.getMinutes()).padStart(2, "0")
    const Seconds = String(now.getSeconds()).padStart(2, "0")

    hours.textContent = `${Hours}`
    minutes.textContent = `${Minutes}`
    seconds.textContent = `${Seconds}`


    const infoHours = document.getElementById("infoHours")
    const infoMinutes = document.getElementById("infoMinutes")
    const infoSeconds = document.getElementById("infoSeconds")

    if(Hours == 1 || Hours == 0){
        infoHours.innerText = "Hora"
    }else if(Minutes == 1 || Minutes == 0){
        infoMinutes.innerText = "Minuto"
    }else if(Seconds == 1 || Seconds == 0){
        infoSeconds.innerText = "Segundo"
    }else{
        infoHours.innerText = "Horas"
        infoMinutes.innerText = "Minutos"
        infoSeconds.innerText = "Segundos"
    }
}

setInterval(updadeClock, 1000)

updadeClock()