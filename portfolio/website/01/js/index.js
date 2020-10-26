function sendButton() {
  let button = document.getElementById("button");
  let comm = document.getElementById("hidden__communicate");
  if ((comm.style.display = "none")) {
    comm.style.display = "block";
    comm.innerHTML = "Your request has been sent";
    button.style.color = "white";
    button.style.background = "green";
  } else {
  }
}
