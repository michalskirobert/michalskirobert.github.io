
function sendMail() {

  const successMsg = "Your e-mail has been sent succesfully. <br /> Thank you!";
  const failMsg =
    "I'm sorry, your message couldn't be sent. <br /> Please try one more time";

  const emailValid = document.querySelector(".emailValid");
  const nameValid = document.querySelector(".nameValid");
  const msgValid = document.querySelector(".messageValid");

  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const msg = document.querySelector("#msg").value;

  if (name === "") {
    nameValid.innerHTML = "Name is required ✘";
    nameValid.style.color = "red";
    document.querySelector("#name").style.borderBottom = "2px solid red";
    document.querySelector("#name").focus();
    return false;

  } else {
    nameValid.style.color = "#52E5BA";
    nameValid.innerHTML = "Name ✓";
    document.querySelector("#name").style.border = "1px solid #52E5BA";
  }

  if (email === "") {
    emailValid.innerHTML = "E-mail is required ✘";
    emailValid.style.color = "red";
    document.querySelector("#email").style.borderBottom = "2px solid red";
    document.querySelector("#email").focus();
    return false;
  } else {
    emailValid.style.color = "#52E5BA";
    emailValid.innerHTML = "E-mail ✓";
    document.querySelector("#email").style.border = "1px solid #52E5BA";
  }

  if (msg === "") {
    msgValid.innerHTML = "Message is required ✘";
    msgValid.style.color = "red";
    document.querySelector("#msg").style.borderBottom = "2px solid red";
    document.querySelector("#msg").focus();
    return false;
  } else {
    msgValid.style.color = "#52E5BA";
    msgValid.innerHTML = "Message ✓";
    document.querySelector("#msg").style.border = "1px solid #52E5BA";
  }


  document.querySelector("#msg").style.border = "1px solid #52E5BA";

  var formdata = new FormData();
  formdata.append("email", email);
  formdata.append("name", name);
  formdata.append("message", msg);

  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("sent").style.display = "block";
      document.getElementById("error").style.display = "none";
      document.getElementById("sent").innerHTML = successMsg;
    } else if (this.readyState == 4 && this.status != 200) {
      document.getElementById("error").style.display = "block";
      document.getElementById("sent").style.display = "none";
      document.getElementById("error").innerHTML = failMsg;
    }
  };

  xhttp.open("POST", "./send.php", true);
  xhttp.send(formdata);
}
