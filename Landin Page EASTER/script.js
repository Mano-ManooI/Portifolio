document.addEventListener("DOMContentLoaded", () =>{

    document.getElementById("scrollHome").addEventListener("click", () =>{
        document.getElementById("Home").scrollIntoView({behavior: "smooth"})
    })
    document.getElementById("scrollAbout").addEventListener("click", () =>{
        document.getElementById("About").scrollIntoView({behavior: "smooth"})
    })
    document.getElementById("scrollWork").addEventListener("click", () =>{
        document.getElementById("Work").scrollIntoView({behavior: "smooth"})
    })
    document.querySelectorAll("#scrollContact").forEach((element) =>{
        element.addEventListener("click", () =>{
            document.getElementById("Contact").scrollIntoView({behavior: "smooth"})
        })
    })


    const img = document.getElementById("EasterImg")
    img.addEventListener("click", () =>{
        window.open("https://maps.app.goo.gl/scitoi5PPJaZHkCcA", "_blank")
    })

    const insta = document.getElementById("instagram")
    insta.addEventListener("click", () =>{
        window.open("https://www.instagram.com/joserobertoda385?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")
    })
    const whats = document.getElementById("whatsApp")
    whats.addEventListener("click", () =>{
        const phoneNumber = "+557998362758"
        const message = "Olá! Desejo saber mais sobre a *Easter*"
        const whatsURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message)
        window.open(whatsURL, "_blank")
    })
})