# Contact Developer

<form id="contact-form" class="topBefore">
    <input id="name" type="text" placeholder="NAME"  name="name">
    <input id="email" type="text" placeholder="E-MAIL" name="email">
    <textarea id="message" type="text" placeholder="MESSAGE" name="message"></textarea>
    <input id="submit" type="submit" value="SEND">
</form>

You can also reach out using the **Support** tab on the extensions **[Chrome web store page](https://chrome.google.com/webstore/detail/line-numbers-for-google-d/mblodabbcapnkgcfnddfpfaamjckjlik)**.

<script>
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = document.getElementById('submit');
    submitButton.disabled = true;
    submitButton.value = "SENDING...";

    const inputs = contactForm.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      input.disabled = true;
    }
    const textAreas = contactForm.querySelectorAll('textarea');
    for (let i = 0; i < textAreas.length; i++) {
      const textArea = textAreas[i];
      textArea.disabled = true;
    }

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const url = `https://linenumbers.app/api/v1/sendMail?name=${name}&email=${email}&message=${message}`;

    fetch(url, {
        method : "POST",
    }).then((response) => {
      console.log("Response", response);
      if (response.status == 200) {
        // Successfully Sent
        submitButton.value = "SENT";
        submitButton.style.background = "#BFE3B4";
      } else {
        // Failed to send...
        submitButton.value = "FAILED TO SEND..."
        submitButton.style.background = "#ED4337";
        submitButton.style.color = "white";
      }
    }).catch((err) => {
      console.log("Error", err);
      // Failed to send...
      submitButton.value = "FAILED TO SEND..."
      submitButton.style.background = "#ED4337";
      submitButton.style.color = "white";
    });
  });
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:100, 300, 400);

input::placeholder,
textarea::placeholder {
  color: #525252;
  font-size: 0.875em;
}

#contact-form-captcha {
    display: none;
}

.text-center {
    text-align: center;
}

.g-recaptcha {
    display: inline-block;
}

input:focus::placeholder,
textarea:focus::placeholder {
  color: #bbb5af;
}

input:hover::placeholder,
textarea:hover::placeholder {
  color: #e2dedb;
  font-size: 0.875em;
}

input:hover:focus::placeholder,
textarea:hover:focus::placeholder {
  color: #cbc6c1;
}

input:hover::placeholder,
textarea:hover::placeholder {
  color: #525252;
  font-size: 0.875em;
}

#form {
  position: relative;
  width: 100%;
  margin: 50px auto 100px auto;
}

input {
  font-family: "Lato", sans-serif;
  font-size: 0.875em;
  width: 100%;
  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: #525252;

  border: solid 1px #808080;
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:not([disabled]):hover, input:focus, #submit:disabled {
  background: #e6e6e6;
  color: #3b3b3b;
}

textarea {
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  min-height: 110px;
  height: 110px;
  max-height: 500px;
  padding: 15px;

  background: transparent;
  outline: none;

  color: #525252;
  font-family: "Lato", sans-serif;
  font-size: 0.875em;

  border: solid 1px #808080;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: #e6e6e6;
  color: #3b3b3b;
}

#submit {
  width: 100%;

  padding: 0;
  margin: -5px 0px 0px 0px;

  font-family: "Lato", sans-serif;
  font-size: 0.875em;
  color: #525252;

  outline: none;
  cursor: pointer;

  border: solid 1px #808080;
  border-top: none;
}

#submit:not([disabled]):hover {
  color: #242424;
}
</style>