document.addEventListener('DOMContentLoaded', function() {
  // boton para cerrar sesion en el navbar
  document.getElementById('logout').addEventListener('click', function() {
      localStorage.removeItem('loggedIn');
      window.location.href = '../index.html';
  });

  // solo ejecuta si estamos en el dashboard
  if (window.location.pathname.endsWith('dashboard.html')) {
      // consultar datos
      document.getElementById('fetchData').addEventListener('click', fetchData);

      function fetchData() {
          fetch('https://cac-fsp-backend-tp-webtechsoluciones.onrender.com/api/contacts/')
              .then(response => response.json())
              .then(data => {
                  const tbody = document.querySelector('#dataTable tbody');
                  tbody.innerHTML = ''; // limpia la tabla antes de rellenar
                  data.forEach(item => {
                      const tr = document.createElement('tr');
                      tr.innerHTML = `
                          <td>${item.name}</td>
                          <td>${item.alias}</td>
                          <td>${item.email}</td>
                          <td>${item.phone}</td>
                          <td>${item.service}</td>
                          <td>${item.message}</td>
                          <td>
                              <span class="edit" data-id="${item.id}" data-name="${item.name}" data-alias="${item.alias}" data-email="${item.email}" data-phone="${item.phone}" data-service="${item.service}" data-message="${item.message}">Editar</span>
                              <span class="delete" data-id="${item.id}">Borrar</span>
                          </td>
                      `;
                      tbody.appendChild(tr);
                  });
                  addEventListeners();
              })
              .catch(error => console.error('Error:', error));
      }

      function addEventListeners() {
          document.querySelectorAll('.edit').forEach(button => {
              button.addEventListener('click', function() {
                  const id = this.getAttribute('data-id');
                  const name = this.getAttribute('data-name');
                  const alias = this.getAttribute('data-alias');
                  const email = this.getAttribute('data-email');
                  const phone = this.getAttribute('data-phone');
                  const service = this.getAttribute('data-service');
                  const message = this.getAttribute('data-message');
                  
                  // muestra el formulario de edicion con los datos actuales
                  document.querySelector('.edit-form').classList.remove('hidden');
                  document.getElementById('editId').value = id;
                  document.getElementById('editName').value = name;
                  document.getElementById('editAlias').value = alias;
                  document.getElementById('editEmail').value = email;
                  document.getElementById('editPhone').value = phone;
                  document.getElementById('editService').value = service;
                  document.getElementById('editMessage').value = message;
              });
          });

          document.querySelectorAll('.delete').forEach(button => {
              button.addEventListener('click', function() {
                  const id = this.getAttribute('data-id');
                  deleteData(id);
              });
          });

          document.getElementById('editForm').addEventListener('submit', function(event) {
              event.preventDefault();
              const id = document.getElementById('editId').value;
              const newData = {
                  name: document.getElementById('editName').value,
                  alias: document.getElementById('editAlias').value,
                  email: document.getElementById('editEmail').value,
                  phone: document.getElementById('editPhone').value,
                  service: document.getElementById('editService').value,
                  message: document.getElementById('editMessage').value,
              };
              editData(id, newData);
          });

          document.getElementById('cancelEdit').addEventListener('click', function() {
              document.querySelector('.edit-form').classList.add('hidden');
          });
      }

      function deleteData(id) {
          fetch(`https://cac-fsp-backend-tp-webtechsoluciones.onrender.com/api/contacts/${id}/`, {
              method: 'DELETE'
          })
              .then(response => {
                  if (response.ok) {
                      fetchData(); // vuelve a cargar los datos
                  } else {
                      console.error('Error al borrar el dato');
                  }
              })
              .catch(error => console.error('Error:', error));
      }

      function editData(id, newData) {
          fetch(`https://cac-fsp-backend-tp-webtechsoluciones.onrender.com/api/contacts/${id}/`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newData)
          })
              .then(response => {
                  if (response.ok) {
                      fetchData(); // vuelve a cargar los datos
                      document.querySelector('.edit-form').classList.add('hidden'); // ocultar el formulario de edicion
                  } else {
                      console.error('Error al actualizar el dato');
                  }
              })
              .catch(error => console.error('Error:', error));
      }
  }
});
