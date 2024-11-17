const form = document.getElementById('dataForm');
const dataList = document.getElementById('dataList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Enviar datos al back-end
    const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
        // Obtener datos actualizados
        const data = await fetch('http://localhost:3000/data');
        const dataListArray = await data.json();

        // Actualizar lista en el front-end
        dataList.innerHTML = '';
        dataListArray.forEach((item) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${item.name} - ${item.email}`;
            dataList.appendChild(li);
        });

        form.reset();
    }
});
