document.addEventListener('DOMContentLoaded', function() {
  var yesButton = document.getElementById('yesButton');
  var noButton = document.getElementById('noButton');
  var question = document.getElementById('question');
  var resultMessage = document.getElementById('resultMessage');

  yesButton.addEventListener('click', function() {
    question.style.display = 'none';
    resultMessage.textContent = 'Смига';
  });

  noButton.addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
  });
});