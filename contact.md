# Contact Developer

<form id="contact-form" class="topBefore">
    <input type="hidden" name="contact_number">
    <input id="name" type="text" placeholder="NAME"  name="name">
    <input id="email" type="text" placeholder="E-MAIL" name="email">
    <textarea id="message" type="text" placeholder="MESSAGE" name="message"></textarea>
    <input id="submit" type="submit" value="SEND">
    <div id="contact-form-captcha" class="text-center">
        <div class="g-recaptcha" data-sitekey="6LfDkeQUAAAAAI-6F_dy38crjclN7q0PB-J7vDlM" 
            data-callback="captchaSuccess" data-expired-callback="captchaExpired"></div>
    </div>
</form>

You can also reach out using the **Support** tab on the extensions **[Chrome web store page](https://chrome.google.com/webstore/detail/line-numbers-for-google-d/mblodabbcapnkgcfnddfpfaamjckjlik)**.

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