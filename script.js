function showMessage() {
    alert("Hello! Welcome to my portfolio website.");
}
const form = document.getElementById("contactForm");
const modal = document.getElementById("thankYouModal");
const closeBtn = document.getElementById("closeModal");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const formData = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            form.reset();

            // Show popup
            modal.classList.add("show");

        } else {

            alert("Failed to send message. Please try again.");

        }

    } catch (error) {

        alert("Something went wrong. Please try again.");

    }

});

// Close button
closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
});

// Close when clicking outside the popup
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});