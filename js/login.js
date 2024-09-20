document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("logged In");

  const mobileNumber = document.getElementById("mn").value;
  const pinNumber = document.getElementById('pin').value;
  console.log(mobileNumber,pinNumber);

  if (mobileNumber === '1234' && pinNumber === '1234') {
    console.log("Logging Successful");
    window.location.href = "home.html";
  } else{
    alert("Wrong Mobile Number or Pin");
  }
});
