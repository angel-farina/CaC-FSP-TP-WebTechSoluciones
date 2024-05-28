document.addEventListener('DOMContentLoaded', function() {
    const aliasButton = document.getElementById('generate-alias');
    aliasButton.addEventListener('click', generateAlias);

    function generateAlias() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const alias = `${user.login.username}`;
                document.getElementById('alias').value = alias;
            })
            .catch(error => console.error('Error al consumir la API:', error));
    }
});
