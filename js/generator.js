document.addEventListener('DOMContentLoaded', function () {
	// Obtener los valores de los campos del formulario en la página anterior
	let nombre = localStorage.getItem('nombre');
	let apellidos = localStorage.getItem('apellidos');
	let dni = localStorage.getItem('dni');
	let facultad = localStorage.getItem('facultad');
	let codigo = localStorage.getItem('codigo');
	let carrera = localStorage.getItem('carrera');
	let imagen = localStorage.getItem('imagen');

	const enlace = `${
		window.location.origin
	}/document.html?nombre=${encodeURIComponent(
		nombre
	)}&apellidos=${encodeURIComponent(apellidos)}&dni=${encodeURIComponent(
		dni
	)}&facultad=${encodeURIComponent(facultad)}&codigo=${encodeURIComponent(
		codigo
	)}&carrera=${encodeURIComponent(carrera)}&imagen=${encodeURIComponent(
		imagen
	)}`;

	// Generar el código QR utilizando QRious
	let qr = new QRious({
		element: document.getElementById('qrCodeCanvas'),
		value: enlace,
		size: 180,
		level: 'H',
	});

	// Configurar el enlace del QR para redirigir al sitio web
	let qrCanvas = document.getElementById('qrCodeCanvas');
	qrCanvas.addEventListener('click', function () {
		window.location.href = enlace;
	});

	// Configurar el enlace de descarga del QR
	let downloadLink = document.getElementById('downloadLink');

	downloadLink.addEventListener('click', function () {
		let qrDataURL = qr.toDataURL();
		downloadLink.href = qrDataURL;
		downloadLink.download = 'codigo_qr.png';
	});
});
