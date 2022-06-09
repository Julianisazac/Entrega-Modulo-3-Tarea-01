window.addEventListener('load', () => {

	const imagenes = [
		{ src: './img/arquero.png', nombre: 'Arquero', descripcion: 'Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5.' },
		{ src: './img/caballero.png', nombre: 'Caballero', descripcion: 'Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria.' },
		{ src: './img/bruja.png', nombre: 'Bruja', descripcion: 'es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha.' },
		{ src: './img/dragon.png', nombre: 'Dragon', descripcion: 'El Bebé dragón es una de las nueve cartas de tropa que inspiraron a una tropa en Clash of Clans.' },
		{ src: './img/goblin.webp', nombre: 'Goblin', descripcion: 'es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior.' },
		{ src: './img/golem.png', nombre: 'Golem', descripcion: 'Es lento, pero persistente, y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3' },
		{ src: './img/los-pillos.png', nombre: 'Los pillos', descripcion: 'Está formada por dos "niñas pillas" y un "niño pillo", el cual tiene la función de defender a sus amigas mientras estas lanzan "chicles" a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo.' },
		{ src: './img/Miner_info.webp', nombre: 'Miner info', descripcion: 'Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal.' },
		{ src: './img/montaPuercos.webp', nombre: 'Monta puercos', descripcion: ' es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro.' },
		{ src: './img/Pekka.webp', nombre: 'Pekka', descripcion: ' Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe.' },
		{ src: './img/principe.png', nombre: 'principe', descripcion: 'Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo.' },
	]

	let slide = 0

	let imagen = document.getElementById('imagen')
	const boton = document.getElementById('boton')
	const volver = document.getElementById('volver')
	const descripcion = document.getElementById('descripcion')
	const next = document.querySelector(".next")
	const prev = document.querySelector(".prev")
	prev.disabled = true

	cambiarImagen(slide)

	boton.addEventListener('click', (evt)=> {
		mostrarDescripcion()
	})
	
	volver.addEventListener('click', (evt)=> {
		mostrarDescripcion()
	})

	next.addEventListener('click', (evt) => {
		slide++;
		cambiarImagen(slide)
		prev.disabled = false
		if (slide === imagenes.length - 1) {
			next.disabled = true
		}
	})

	prev.addEventListener('click', (evt) => {
		slide--;
		cambiarImagen(slide)
		next.disabled = false
		if (slide === 0) {
			prev.disabled = true
		}
	})

	function cambiarImagen(position) {
		imagen.src = imagenes[position].src
		boton.innerHTML = imagenes[position].nombre
		descripcion.innerHTML = imagenes[position].descripcion
	}

	function mostrarDescripcion() {
		if (descripcion.style.display === 'block') {
			descripcion.style.display = 'none'
			volver.style.display = 'none'
			boton.style.display = 'block'
			prev.style.display = 'block'
			next.style.display = 'block'
		} else {
			descripcion.style.display = 'block'
			volver.style.display = 'block'
			boton.style.display = 'none'
			prev.style.display = 'none'
			next.style.display = 'none'
		}
		console.log('jhjghj');
	}

	// let slide = 1;

	// let slides = document.querySelectorAll(".slider ul li");

	// let total = slides.length;


	// showSlide(1);

	// next = document.querySelector(".next");
	// prev = document.querySelector(".prev");

	// function validarLimite() {
	//     slide = 0
	// }


	// next.addEventListener('click', (evt) => {
	//     evt.preventDefault();
	//     slide++;
	//     prev.disabled = false
	//     if (slide === total) { next.disabled = true }
	//     //else {

	//     //next.disabled = false;
	//     //console.log ("gniengur");
	//     //}
	//     showSlide(slide);
	// })

	// prev.addEventListener("click", (evt) => {
	//     evt.preventDefault();
	//     slide--;
	//     next.disabled = false;
	//     if (slide < 2) { prev.disabled = true; }
	//     //{ 
	//     //prev.disabled = false;
	//     //}
	//     showSlide(slide);
	// })

	// // @param {number} n 
	// //@return {null}


	// function showSlide(n) {
	//     n--;
	//     for (i = 0; i < slides.length; i++) {
	//         (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
	//     }
	// }

})