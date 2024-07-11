document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const alias = document.getElementById('alias').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const agree = document.getElementById('agree').checked;
        const message = document.getElementById('message').value;
        const recaptchaResponse = grecaptcha.getResponse();
        
        if (!name || !alias || !email || !phone || !service || !agree || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        } else if (recaptchaResponse.length === 0) {
            alert('Por favor, completa el reCAPTCHA.');
            return;
        }
        
        try {
            const response = await fetch('https://cac-fsp-backend-tp-webtechsoluciones.onrender.com/api/contacts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    alias: alias,
                    email: email,
                    phone: phone,
                    service: service,
                    message: message
                })
            });
            
            if (!response.ok) {
                throw new Error('Error al enviar el formulario.');
            }
            
            alert('Formulario enviado correctamente.');
            form.reset();
            grecaptcha.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        }
    });
});
