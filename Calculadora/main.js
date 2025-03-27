const input = document.getElementById("input")
input.addEventListener("input", () =>{
    input.value = input.value.replace(/[^0-9,+\-*/\s]/g, "")
    input.value = input.value.replace(/([+\-*/]{2,}|,{2,})/g, "")

    if(input.value === ""){
        input.value = "0"
    }else{
        input.value = input.value.replace(/^0+(?!$)/, "")
    }
    
    input.value = input.value.split("").reverse().join("")
    input.setSelectionRange(input.value.length, input.value.length)
})