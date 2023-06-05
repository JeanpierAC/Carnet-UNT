const formulario = document.getElementById('loginForm');
const correoInput = document.getElementById('correo');

// Verificar si hay un correo almacenado en localStorage y establecerlo en el campo correspondiente
const correoGuardado = localStorage.getItem('correo');

if (correoGuardado) {
	correoInput.value = correoGuardado;
	window.localStorage = '/date.html';
}

// Agregar un evento de escucha para el evento "submit" del formulario
formulario.addEventListener('submit', function (event) {
	event.preventDefault();

	// Obtener el valor del campo de correo electrónico
	const correoValue = correoInput.value;

	// Validar el correo electrónico con una expresión regular
	const regex = /^[a-zA-Z0-9._-]+@unitru\.edu\.pe$/;

	if (regex.test(correoValue)) {
		// Guardar el correo electrónico en localStorage
		localStorage.setItem('correo', correoValue);
		window.location = '/date.html';
	} else {
		alert('El correo electrónico no es válido.');
		// Aquí puedes realizar otras acciones si el correo no es válido
	}
});
