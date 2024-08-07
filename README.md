<div style="background-color: #f0f0f0; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
    <p style="font-style: italic; color: #666; font-size: 14px;">Trabajo Práctico Desarrollo Web HTML, CSS y JavaScript. Full Stack Python - Comisión 24150, CaC.</p>
</div>

# WebTechSoluciones - Documentación Técnica

WebTechSoluciones es un sitio web que ofrece servicios de desarrollo web, almacenamiento de datos, soporte IT y servicios de servidores. Aquí está la documentación técnica clave para comprender su funcionamiento y estructura, incluyendo su validación por [https://validator.w3.org/](https://validator.w3.org/).

## Estructura del Proyecto
El proyecto sigue una estructura básica de HTML, CSS y JavaScript. Los archivos se organizan en diferentes directorios para una mejor gestión:

- **assets/:** Contiene archivos multimedia (imágenes, íconos, etc.) y recursos de estilo y script.
- **assets/css/:** Estilos CSS utilizados en todo el sitio.
- **assets/js/:** Scripts JavaScript utilizados para funcionalidades interactivas.
- **assets/multimedia/:** Contiene imágenes utilizadas en el sitio.
- **pages/:** Páginas HTML individuales para Inicio, Acerca de, Servicios y Contacto.

## Funcionalidades Clave
- **Slideshow:** Implementado con JavaScript y CSS para mostrar los servicios destacados en la página principal.
- **Formulario de Contacto:** Permite a los usuarios enviar consultas o comentarios mediante formularios de contacto que envían datos a través de una API REST.
- **Responsive:** El sitio está diseñado para adaptarse y ser accesible en una variedad de dispositivos y tamaños de pantalla.
- **Consumo de API:** Se consume la API [Random User Generator](https://randomuser.me/api/) para generar un alias aleatorio cuando el usuario hace clic en el botón "Aleatorio" en el formulario de contacto. Esta API proporciona datos aleatorios de usuarios, incluyendo nombres de usuario, entre otros. Cuando se hace clic en el botón, se realiza una solicitud a esta API utilizando la función `fetch()` de JavaScript. Una vez que se recibe la respuesta, se extrae el nombre de usuario aleatorio del objeto de respuesta y se establece como el valor del campo de entrada "Alias" en el formulario de contacto.
- **Google reCAPTCHA:** Implementado en el formulario de contacto para verificar que el remitente no sea un bot y prevenir envíos automáticos.
- **Autenticación de Usuario:** Añadido auth.js para gestionar la autenticación de usuario y acceso al dashboard.
Se verifica si el usuario está autenticado utilizando localStorage y se redirige al inicio si no lo está.
- **Dashboard de Administración:** Desarrollado el dashboard que permite visualizar y gestionar los contactos almacenados en la API REST.
Incluye funcionalidad para editar y eliminar datos directamente desde la interfaz.
- **Modal de Inicio de Sesión:** Se añadió un modal interactivo para el inicio de sesión que valida las credenciales del usuario.
Utiliza cookies y tokens CSRF para seguridad en la comunicación con la API de autenticación.

## Validación W3C
El sitio web ha sido validado por [https://validator.w3.org/](https://validator.w3.org/), lo que garantiza que el código HTML cumple con los estándares establecidos por el Consorcio World Wide Web (W3C) para la accesibilidad y la interoperabilidad web.

## Tecnologías Utilizadas
- **HTML5:** Utilizado para la estructura y el contenido de las páginas.
- **CSS3:** Estilos aplicados para mejorar la apariencia y la usabilidad del sitio, incluyendo su capacidad de ser responsive.
- **JavaScript:** Scripts utilizados para funcionalidades interactivas como el slideshow y el formulario de contacto.

## Colaboradores
- **Angel Farina**
- **Diego Capdevila**
- **Jeremías Geminiani**
- **Arturo Villagran**

## Muestra
![Ejemplo de Imagen](sample.png)

## Deploy
[https://webtechsoluciones.netlify.app/](https://webtechsoluciones.netlify.app/)

## Final
Esta documentación técnica proporciona una visión detallada de la estructura, las funcionalidades, las tecnologías utilizadas y la validación por W3C del proyecto de WebTechSoluciones.
