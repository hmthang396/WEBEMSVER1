const form = document.querySelector("#form");
const table = document.querySelector("#plan");
form.addEventListener("submit", (e) => {
    $("#plan").css("display", "block");
    e.preventDefault();
});