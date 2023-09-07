const button = document.querySelectorAll(".number-button");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");
const main = document.querySelector(".main");
const num = document.querySelector(".sp-number");

submit.addEventListener("click", function () {
  winow.location.href = "index-2.html";  
  if (num.innerHTML) {
    main.classList.add("hidden");
    result.classList.remove("hidden");
  }
});

button.forEach((number) =>  {
    number.addEventListener("click", function (e) {
    const n = e.target.dataset.key;
    num.innerHTML = n;
  });
});


