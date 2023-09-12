const button = document.querySelectorAll(".number-button");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");
const main = document.querySelector(".main");
const num = document.querySelector(".sp-number");

submit.addEventListener("click", function () { 
  if (num.innerHTML) {
    main.classList.add("hidden");
    result.classList.remove("hidden");
  };
});

submit.addEventListener("click", function () {
  if (result.style.display === 'block'){
    result.style.display = 'none'
  } else {
    result.style.display = 'block'
    main.style.display = 'none'
  };
})

button.forEach((number) =>  {
    number.addEventListener("click", function (e) {
    const n = e.target.dataset.key;
    //alvo de um conjjunto de dados 
    num.innerHTML = n;
  });
});



