window.addEventListener('DOMContentLoaded', function () {
	// Obtener los valores de los parámetros de la URL
	const urlParams = new URLSearchParams(window.location.search);

	let nombre = urlParams.get('nombre');
	let apellidos = urlParams.get('apellidos');
	let dni = urlParams.get('dni');
	let facultad = urlParams.get('facultad');
	let codigo = urlParams.get('codigo');
	let carrera = urlParams.get('carrera');
	let imagen = urlParams.get('imagen');

	// Almacenar los valores en el localStorage
	localStorage.setItem('nombre', nombre);
	localStorage.setItem('apellidos', apellidos);
	localStorage.setItem('dni', dni);
	localStorage.setItem('facultad', facultad);
	localStorage.setItem('codigo', codigo);
	localStorage.setItem('carrera', carrera);
	localStorage.setItem('imagen', imagen);

	// Establecer los valores en los placeholders de los inputs
	document.getElementById('nombreInput').placeholder = nombre;
	document.getElementById('apellidosInput').placeholder = apellidos;
	document.getElementById('dniInput').placeholder = dni;
	document.getElementById('facultadInput').placeholder = facultad;
	document.getElementById('codigoInput').placeholder = codigo;
	document.getElementById('carreraInput').placeholder = carrera;
	document.getElementById(
		'imagenPerfil'
	).src = `https://res.cloudinary.com/dfeivuxtw/image/upload/${imagen}`;
});
