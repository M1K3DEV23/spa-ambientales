// Javascript para la navegacinon horizontal de los botones

// Referencias a los botones
const btnIzquierda = document.querySelector('.izquierda-btn');
const btnDerecha = document.querySelector('.derecha-btn');
const tabMenu = document.querySelector('.tab-menu');

// Visibilidad del icono
const iconoVisible = () => {
  // Obtenemos el valor del scroll a la izquierda
  let valorScrollIzq = Math.ceil(tabMenu.scrollLeft);

  let anchoScrollable = tabMenu.scrollWidth - tabMenu.clientWidth;

  btnIzquierda.style.display = valorScrollIzq > 0 ? 'block' : 'none';

  btnDerecha.style.display = anchoScrollable > valorScrollIzq ? 'block' : 'none';
};

// Eventos de los botones
// Scroll hacia la izquierda
btnDerecha.addEventListener('click', () => {
  tabMenu.scrollLeft += 150;
  //   Llamos a nuestro funcion
  setTimeout(() => iconoVisible(), 50);
});

// Scroll hacia la derecha
btnIzquierda.addEventListener('click', () => {
  tabMenu.scrollLeft -= 150;
  // Llamos a nuestra funcion para ver si la izquierda es scrollable
  setTimeout(() => iconoVisible(), 50);
});

window.onload = () => {
  btnDerecha.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? 'block' : 'none';
  btnIzquierda.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';
};

// Para hacer compatible los iconos de navegacion con los dispositivos moviles
window.onresize = () => {
  btnDerecha.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? 'block' : 'none';
  btnIzquierda.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';

  let valorScrollIzq = Math.round(tabMenu.scrollLeft);

  btnIzquierda.style.display = valorScrollIzq > 0 ? 'block' : 'none';
};

// Javascript para la navegacion jalar con el mouse los botones

let activeDrag = false;

tabMenu.addEventListener('mousemove', (drag) => {
  if (!activeDrag) return;

  tabMenu.scrollLeft -= drag.movementX;
  iconoVisible();
  //   Agregamos una propiedad para saber, cuando el usuario este moviendo con el mouse
  tabMenu.classList.add('dragging');
});

document.addEventListener('mouseup', () => {
  activeDrag = false;
  //   Aqui removemos la clase
  tabMenu.classList.remove('dragging');
});

tabMenu.addEventListener('mousedown', () => {
  activeDrag = true;
});
