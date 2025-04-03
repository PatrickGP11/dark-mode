const btn = document.querySelector("#btn")

function darkMode() {
    const body = document.querySelector("body")
    body.classList.toggle("dark-mode")

    console.log(btn.innerText)
    if(btn.innerText == "Ativar") {
        btn.innerText = "Desativar"
        return;
    }
    btn.innerText = "Ativar"
}

btn.addEventListener("click", darkMode)

