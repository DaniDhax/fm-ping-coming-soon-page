const $txtEmail = document.getElementById("txt-email");
const $btnEmail = document.getElementById("btn-email");
const $errorMessage = document.getElementById("error-message");
const $section2 = document.querySelector(".section-2");


function comprobarEmail() {
  let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (!regex.test($txtEmail.value) || $txtEmail.value === "") {
    $errorMessage.style.visibility = "visible"
    $txtEmail.style.border = "2px solid var(--light-red)"
    $section2.style.rowGap = "35px"
  } else {
    $errorMessage.style.visibility = "hidden"
    $txtEmail.style.border = "1px solid var(--pale-blue)"
    $section2.style.rowGap = "10px"
  }
}

$btnEmail.addEventListener("click", comprobarEmail);
