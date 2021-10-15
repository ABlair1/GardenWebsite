// Click handler for contact form submission. 
document.addEventListener("DOMContentLoaded", contactFormSubmit);

function contactFormSubmit() {
    document.getElementById("contact_form_submit").addEventListener("click", function (event) {
        var req = new XMLHttpRequest();
        var userFormData = {
            userName: null, 
            userEmail: null, 
            userComment: null
        }
        userFormData.userName = document.getElementById("user_name").nodeValue;
        userFormData.userEmail = document.getElementById("user_email").nodeValue;
        userFormData.userComment = document.getElementById("user_comment").nodeValue;
        req.open("POST", "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php", true);
        req.setRequestHeader("Content-Type", "application/JSON");
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                document.getElementById("formConfirmation").textContent = "Your message has been sent! Thanks!"
                console.log("POST request successful");
            } else {
                console.log("request failed");
            }
        })
        req.send(JSON.stringify(userFormData));
        event.preventDefault();
    })
}