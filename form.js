


const form = document.getElementById("contactForm");
const status = document.querySelector(".form-results");

if (form && status) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    // FORCE visibility (this is the magic)
    status.style.display = "block";
    status.style.color = "#28a745";
    status.textContent = "✅ Your message has been sent successfully!";

    // Send to Formspree in background
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    }).catch(err => {
      console.log("Formspree error:", err);
    });

    // Optional: reset form
    form.reset();

    // Optional: clear message after 5 seconds
    setTimeout(() => {
      status.textContent = "";
      status.style.display = "none";
    }, 5000);
  });
}

