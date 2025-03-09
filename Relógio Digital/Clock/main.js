function updateClock(){
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)

    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = seconds

    const infoMoment1 = document.getElementById("infoMoment1")
    const infoMoment2 = document.getElementById("infoMoment2")
    const infoMoment3 = document.getElementById("infoMoment3")
    if(hours === "00" || hours === "01"){
        infoMoment1.innerText = "Hora"
    }else if(minutes === "00" || minutes === "01"){
        infoMoment2.innerText = "Minuto"
    }else if(seconds === "00" || seconds === "01"){
        infoMoment3.innerText = "Segundo"
    }else{
        infoMoment3.innerText = "Segundos"
        infoMoment2.innerText = "Minutos"
        infoMoment1.innerText = "Horas"
    }
}

setInterval(updateClock, 1000)

updateClock()