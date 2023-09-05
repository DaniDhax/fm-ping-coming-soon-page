const $txtEmail = document.getElementById("txt-email");
const $btnEmail = document.getElementById("btn-email");
const $errorMessage = document.getElementById("error-message");
const $section2 = document.querySelector(".section-2");
const $customAlert = document.getElementById("custom-alert");

function comprobarEmail() {
  let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (!regex.test($txtEmail.value) || $txtEmail.value === "") {
    $errorMessage.style.visibility = "visible";
    $txtEmail.style.border = "2px solid var(--light-red)";
    $section2.style.rowGap = "35px";
    $txtEmail.value === ""
      ? ($errorMessage.innerText =
          "Whoops! It looks like you forgot to add your email")
      : ($errorMessage.innerText = "Please provide a valid email address");
      $customAlert.style.display = "none";
  } else {
    $errorMessage.style.visibility = "hidden";
    $txtEmail.style.border = "1px solid var(--pale-blue)";
    $section2.style.rowGap = "10px";
    $customAlert.style.display = "block";
  }
}

function closeCustomAlert() {
    $customAlert.style.display = "none";
  }
  
$btnEmail.addEventListener("click", comprobarEmail);
