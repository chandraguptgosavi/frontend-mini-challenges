(() => {
  const displayBtn = document.querySelector(".display"),
    messageBox = document.querySelector(".message-box"),
    TIME = 3000;
  let timeoutID, previousToastPosition;
  displayBtn.addEventListener("click", (event) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
      timeoutID = undefined;
      messageBox.classList.remove("display-message-box");
      messageBox.classList.remove(previousToastPosition);
    }
    const toastPosition = document.querySelector(
      'input[name="toast"]:checked'
    ).value;
    messageBox.classList.add("display-message-box");
    messageBox.classList.add(toastPosition);
    timeoutID = setTimeout(() => {
      messageBox.classList.remove("display-message-box");
      messageBox.classList.remove(toastPosition);
    }, TIME);
    previousToastPosition = toastPosition;
  });
})();
