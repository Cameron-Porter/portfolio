function lightMode() {
  var e = document.body;
  e.classList.toggle("light-mode");

  var element = document.getElementById("lightMode");
  element.classList.remove("fa fa-moon");
  element.classList.add("fa fa-sun");
}

function validateForm() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.querySelector(".status").innerHTML = "Name cannot be empty";
    return false;
  }
  var email = document.getElementById("email").value;
  if (email == "") {
    document.querySelector(".status").innerHTML = "Email cannot be empty";
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector(".status").innerHTML = "Email format invalid";
      return false;
    }
  }
  var message = document.getElementById("message").value;
  if (message == "") {
    document.querySelector(".status").innerHTML = "Message cannot be empty";
    return false;
  }
  document.querySelector(".status").innerHTML = "Sending...";
  sendmail();
}

function sendmail() {
  let fullname = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

  let contactParams = {
    from_name: fullname,
    email: userEmail,
    message: userMessage,
  };
  emailjs.send("service_Portfolio", "template_AgohigeTech", contactParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      document.querySelector(".status").innerHTML =
        "Your email has been sent successfully!";
    },
    function (error) {
      console.log("FAILED...", error);
      document.querySelector(".status").innerHTML =
        "Email submission failed, please check your console for error message.";
    }
  );
  document.getElementById("contactForm").reset();
}
