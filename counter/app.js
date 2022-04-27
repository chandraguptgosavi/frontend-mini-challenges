(() => {
  const counterValue = document.querySelector(".counter-val"),
    btnDecrement = document.querySelector(".dec"),
    btnIncrement = document.querySelector(".inc"),
    btnReset = document.querySelector(".reset"),
    countBy = document.querySelector(".count-by");

  btnDecrement.addEventListener("click", (event) => {
    counterValue.innerText =
      parseInt(counterValue.innerText, 10) - parseInt(countBy.value, 10);
  });

  btnIncrement.addEventListener("click", (event) => {
    counterValue.innerText =
      parseInt(counterValue.innerText, 10) + parseInt(countBy.value, 10);
  });

  btnReset.addEventListener("click", (event) => {
    counterValue.innerText = 0;
  });
})();
