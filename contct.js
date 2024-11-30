function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !subject || !message) {
      document.getElementById("form-response").innerText = "All fields are required!";
      document.getElementById("form-response").style.color = "red";
      return;
    }
  
    document.getElementById("form-response").innerText = "Thank you for contacting us! We will get back to you soon.";
    document.getElementById("form-response").style.color = "green";
  
    // Optionally, reset the form
    document.getElementById("contact-form").reset();
  }
  