document.getElementById('loginForm').addEventListener('submit', function (event) {
   event.preventDefault();
   const username = document.getElementById('username').value;
   localStorage.setItem('hangmanUsername', username);
   window.location.href = 'hangman.html';
});
