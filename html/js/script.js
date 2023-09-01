const number = document.querySelector(".numeros");
const enviar = document.querySelector(".enviar");
const span = document.querySelector("span");
const agradecer = document.querySelector(".obrigado")


number.addEventListener("click", (event) => {
    var num = event.target;
    num.style.backgroundColor = "rgba(240, 248, 255, 0.446)";
    num.style.color = " hsl(25, 97%, 53%)";
    span.textContent = num.innerText;
});

enviar.addEventListener("click", () => {
    agradecer.style.display = "block";
    setTimeout(() => {
        agradecer.style.display = "none";
    }, 3000);
})
