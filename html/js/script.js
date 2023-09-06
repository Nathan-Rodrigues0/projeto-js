/*const buttons = document.querySelectorAll(".numeros .button")
const submit = document.querySelector(".enviar")
const res = document.querySelector(".resultado")
const valor = document.querySelector(".sp")

buttons.forEach(button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        buttons.forEach((otherButton) => {
            otherButton.classList.remove("active");
        });
        button.classList.add("active")
        submit.disabled = false;
    });
}*/
const ratingButtons = document.querySelectorAll(".numeros .button");
const submitButton = document.querySelector(".button-submit");
const thankYouContainer = document.querySelector(".resultado");
const ratingValue = document.querySelector(".sp");

ratingButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    ratingButtons.forEach((otherButton) => {
      otherButton.classList.remove("active");
    });
    button.classList.add("active");
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const activeButton = document.querySelector(
    ".numeros .button.active"
  );
  if (activeButton) {
    activeButton.disabled = true;
    document.querySelector(".principal").style.display = "none";
    thankYouContainer.style.display = "block";
    ratingValue.textContent = activeButton.dataset.rating;
  }
});
    