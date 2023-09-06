const button = document.querySelectorAll(".number-button");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");
const main = document.querySelector(".main");
const number = document.querySelector(".number");

submit.addEventListener("click", function () {
  if (number.innerHTML) {
    main.classList.add("hidden");
    result.classList.remove("hidden");
  }
});

button.forEach(number) => {
    number.addEventListener("click", function (e) {
    const num = e.target.dataset.ket;
    number.innerHTML = num;
  });
};