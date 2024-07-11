// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// si se clickea el boton, se abre 
btn.onclick = function() {
  modal.style.display = "block";
}

// si se clickea <span> (x), se cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// si se clickea fuera del modal se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// form submission and validation
document.getElementById("loginForm").onsubmit = function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // prepare data to send in the POST request
  var formData = {
    username: username,
    password: password
  };

  fetch('http://localhost:8000/api/verify-user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken'),
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (response.ok) {
      console.log('Usuario autenticado correctamente');
      localStorage.setItem('loggedIn', true);
      window.location.href = "pages/dashboard.html"; // redirect to another HTML page
    } else {
      console.error('Error de autenticación');
      alert("Credenciales incorrectas. Intente de nuevo.");
    }
  })
  .catch(error => console.error('Error:', error));
}

// get CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
