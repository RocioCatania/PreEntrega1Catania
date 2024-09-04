const body= document.querySelector('#bodyIndex');
const main = document.querySelector('#mainIndex');
const sectionMain=document.createElement('section');
const divMain=document.createElement('div');
const h1Main= document.createElement('h1');
const parrafoIndex=document.createElement('p');

main.appendChild(sectionMain);
sectionMain.appendChild(divMain);
divMain.appendChild(h1Main);
divMain.setAttribute( "data-aos","zoom-out")
h1Main.innerHTML="Pataventura te acompaña a descubrir el Sur Argentino"
divMain.appendChild(parrafoIndex);
parrafoIndex.innerHTML=" En Pataventura, te llevamos a explorar los rincones más fascinantes y salvajes del sur de Argentina, donde la naturaleza y la aventura se encuentran. Nuestra misión es ofrecerte experiencias únicas y memorables en los paisajes espectaculares de la Patagonia, desde montañas imponentes hasta glaciares majestuosos y costas inexploradas.Cada uno de nuestros paquetes turísticos está cuidadosamente diseñado para sumergirte en la esencia del sur argentino. Con guías expertos y un equipo dedicado, nos aseguramos de que tu viaje sea seguro, emocionante y lleno de descubrimientos. Ya sea que estés buscando una aventura de trekking, un recorrido cultural por pueblos pintorescos, o la tranquilidad de la observación de fauna en su hábitat natural, Pataventura tiene la opción perfecta para ti.Nos enorgullece crear itinerarios que no solo te acercan a la naturaleza, sino que también te conectan con la cultura y la historia de esta región única. Queremos que cada momento de tu viaje sea una oportunidad para aprender, explorar y disfrutar de todo lo que el sur argentino tiene para ofrecer.Con Pataventura, la aventura no tiene límites. Déjanos ser tu guía en esta travesía por el sur, donde cada destino es una nueva experiencia y cada viaje, una historia para contar. ¡Descubre la Patagonia con nosotros y vive la aventura de tu vida! " ;

sectionMain.classList.add('sectionMain');
divMain.classList.add('divMain');
divMain.add('data-aos="zoom-in-up"');