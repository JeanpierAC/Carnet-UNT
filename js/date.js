const formulario = document.getElementById('formulario');
const CLOUDINARY_CLOUD_NAME = 'dfeivuxtw';
const CLOUDINARY_API_KEY = '883839226322164';
const CLOUDINARY_API_SECRET = 'xBCAUU1v7kWuXoYSBe_36FJxajU';
const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

formulario.addEventListener('submit', async (event) => {
	event.preventDefault();

	console.log('hola');

	// Obtener los valores de los inputs
	const nombre = document.getElementById('nombreInput').value;
	const apellidos = document.getElementById('apellidosInput').value;
	const dni = document.getElementById('dniInput').value;
	const facultad = document.getElementById('facultadInput').value;
	const codigo = document.getElementById('codigoInput').value;
	const carrera = document.getElementById('carreraInput').value;

	let fileInput = document.getElementById('formFileSm');
	let file = fileInput.files[0];

	// Crear un objeto FileReader
	let reader = new FileReader();

	reader.onload = async function (event) {
		const base64Image = event.target.result;

		const response = await axios.post(CLOUDINARY_API, {
			file: base64Image,
			upload_preset: 'wrfu8bdn',
		});

		const url = response.data.secure_url;

		const regex = /\/upload\/(.*)/;
		const match = url.match(regex);

		if (match && match[1]) {
			const image = match[1];
			localStorage.setItem('imagen', image);
		}

		// Guardar los datos en el almacenamiento local
		localStorage.setItem('nombre', nombre);
		localStorage.setItem('apellidos', apellidos);
		localStorage.setItem('dni', dni);
		localStorage.setItem('facultad', facultad);
		localStorage.setItem('codigo', codigo);
		localStorage.setItem('carrera', carrera);

		// Redireccionar después de que la imagen se haya subido
		window.location.href = '/carnet.html';
	};

	reader.readAsDataURL(file);
});
