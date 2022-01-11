//this actually works, not sure why whenever it says "form submitted, it resets as if nothing happened."
let submit = document.getElementById("submit");
let pass1 = document.getElementById("pass");
let form = document.querySelector(".form")

submit.addEventListener("click", function () {
    if (pass1.value === "12345678") {
        form.textContent = "Form Submitted";

    }
    else {
        alert("incorrect");
    }


})

