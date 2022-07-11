function myFunction() {
    var x = document.getElementById("clientphone");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }