document.addEventListener('DOMContentLoaded', () => {
	// Obtener los valores almacenados en el localStorage
	let nombre = localStorage.getItem('nombre');
	let apellidos = localStorage.getItem('apellidos');
	let dni = localStorage.getItem('dni');
	let facultad = localStorage.getItem('facultad');
	let codigo = localStorage.getItem('codigo');
	let carrera = localStorage.getItem('carrera');

	// Establecer los valores en los placeholders de los inputs
	document.getElementById('nombreInput').placeholder = nombre;
	document.getElementById('apellidosInput').placeholder = apellidos;
	document.getElementById('dniInput').placeholder = dni;
	document.getElementById('facultadInput').placeholder = facultad;
	document.getElementById('codigoInput').placeholder = codigo;
	document.getElementById('carreraInput').placeholder = carrera;

	// Obtener la imagen del localStorage y mostrarla
	let imagen = localStorage.getItem('imagen');
	if (imagen) {
		let imagenElement = document.getElementById('imagenPerfil');
		imagenElement.src = `https://res.cloudinary.com/dfeivuxtw/image/upload/${imagen}`;
	}
});

function generarCodigoQR(event) {
	event.preventDefault();
	// Redirigir a la página de generación del código QR
	window.location.href = '/generator.html';
}
