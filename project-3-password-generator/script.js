var copyBtn = document.getElementById("copy");

function getPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 16;
  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    console.log(password);
    password += chars.substring(randomNumber, randomNumber + 1);

    document.getElementById("password").value = password;
    console.log(password);

    copyBtn.style.background = "#6c757d";
    copyBtn.style.color = "#fff";
  }
}

function copyPassword() {
  var inputpassword = document.getElementById("password");

  if (inputpassword.value.length == 16) {
    inputpassword.select();
    document.execCommand("copy");

    copyBtn.style.background = "transparent";
    copyBtn.style.color = "#000";

    alert("the password as been copied !");
  } else {
    alert("pleace generate password");
  }
}
