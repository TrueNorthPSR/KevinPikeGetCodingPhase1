const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
const selectedAnswer = document.querySelector('input[name="q1"]:checked');

if (selectedAnswer) {
const confirmMsg = You are about to submit ${selectedAnswer.value};
alert(confirmMsg);
} else {
alert("You cannot submit an answer until you first select an answer.");
}
});