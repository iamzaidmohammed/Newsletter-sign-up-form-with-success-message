const signupFormPage = document.querySelector(".form");
const signupForm = document.getElementById("form");
const email = document.querySelector("#email");
const successPage = document.querySelector(".success");
const errorMsg = document.querySelector(".error");
const clientEmail = document.querySelector(".client-email");
const dismiss = document.querySelector(".dismiss");

function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateEmail(email.value)) {
    errorMsg.textContent = "";
    email.classList.remove("error");
    signupFormPage.style.display = "none";
    successPage.style.display = "flex";
    clientEmail.textContent = email.value;
  } else {
    errorMsg.textContent = "Valid email required";
    email.classList.add("error");
  }
});

dismiss.addEventListener("click", () => {
  window.location.reload();
});
