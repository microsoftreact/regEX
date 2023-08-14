const signupForm = document.querySelector("#signup-form");
// const userName = document.querySelector("#username");
const message = document.querySelector(".message");
const regEX = /^[a-zA-Z0-9]{6,12}$/;

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = signupForm.username.value;

  if (regEX.test(inputVal)) {
    message.textContent = "Ma'lumot to'g'ri kiritildi";
  } else {
    message.textContent =
      "Kiritilayotgan ma'lumot 6 va 12 orasida bo'lishi kerak. Shuningdek kichik va katta lotin harflaridan iborat bo'lishi zarur. Raqamlar ham ishtirok etishi mumkin.";
  }
});

// Live feedback
signupForm.username.addEventListener("keyup", (e) => {
  if (regEX.test(e.target.value)) {
    signupForm.username.setAttribute("class", "success");
  } else {
    signupForm.username.setAttribute("class", "error");
  }
});