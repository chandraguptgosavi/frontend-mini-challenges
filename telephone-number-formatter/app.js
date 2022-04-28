(() => {
  const numberInput = document.querySelector(".number");

  const getNumbersString = (str) =>
    [...str].filter((char) => char !== " " && Number.isInteger(+char)).join("");

  const onNumberChange = () => {
    console.log(numberInput.value);
    const number = getNumbersString(numberInput.value);
    if (number.length > 3) {
      numberInput.value = `+(${number.substring(0, 3)}) - ${number.substring(
        3
      )}`;
    } else numberInput.value = number;
  };
  numberInput.addEventListener("input", onNumberChange);
})();
