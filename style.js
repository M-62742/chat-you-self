const input = document.getElementById("input")
const button = document.querySelector(".send")
const messages = document.querySelector(".messages")
const Kame = "sarfaraz"

button.addEventListener("click",()=>{
    if(input.value == ""){
        alert("input box is kahli")
    }else{
        const message = document.createElement("div")
        message.className = "message"
        const newname = document.createElement("div")
        newname.className = "name";
        message.textContent = Kame;
        message.appendChild(newname);
        const newmessage = document.createElement("div")
        newmessage.className = "mes"
        newmessage.textContent = input.value
        message.appendChild(newmessage)
        messages.appendChild(message);
        input.value = ""
    }
})