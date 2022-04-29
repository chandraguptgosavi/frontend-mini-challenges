const passwordInput = document.querySelector(".password-input"),
  progressBar = document.querySelector(".progressbar");

passwordInput.addEventListener("input", (event) => {
  // check if password contains at least one number
  const hasNumber = /\d/;
  // check if password contains at least one uppercase letter
  const hasUpperCase = /[A-Z]/;
  // check if password contains at least one lowercase letter
  const hasLowerCase = /[a-z]/;
  // check if password contains at least one special character
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  const password = passwordInput.value;

  let strength = Math.min(6, Math.floor(password.length / 3));

  strength +=
    password.length > 3
      ? hasNumber.test(password) +
        hasLowerCase.test(password) +
        hasUpperCase.test(password) +
        hasSpecialChar.test(password)
      : 0;

  if (strength > 8) {
    progressBar.style.backgroundColor = "green";
  } else if (strength > 5) {
    progressBar.style.backgroundColor = "orange";
  } else progressBar.style.backgroundColor = "red";

  progressBar.style.width = `${strength * 10}%`;
});
