const btn = document.querySelector("#btn")

function darkMode() {
    const body = document.querySelector("body")
    body.classList.toggle("dark-mode")
}

btn.addEventListener("click", darkMode)

