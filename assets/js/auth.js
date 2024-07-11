document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('dashboard.html')) {
      if (!localStorage.getItem('loggedIn')) {
        alert('No autorizado');
        window.location.href = '../index.html';
      } else {
        document.querySelector('.dashboard').classList.remove('hidden');
      }
    }
  });
  