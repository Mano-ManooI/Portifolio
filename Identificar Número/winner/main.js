const reloadButton = document.getElementById("reloadButton")

setTimeout(() => {
    reloadButton.style.display = "inline"
}, 1500);

reloadButton.addEventListener("click", () =>{
    window.location.href = "/main/index.html"
})