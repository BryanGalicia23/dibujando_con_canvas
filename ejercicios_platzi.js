document.addEventListener("keydown", moveWithKey);
const d = document.getElementById("mi-lienzo");
const lienzo = d.getContext("2d");
const anchura = document.getElementById("select-width");
const colorcito = document.getElementById("select-color");

document.addEventListener("mouseup", soltarMouse);
d.addEventListener("mousedown", presionarMouse);
d.addEventListener("mousemove", dibujarMouse);

anchura.addEventListener("click", cambiarGrosor);
colorcito.addEventListener("click", cambiarColor);

const teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
let x = 150;
let y = 150;
let myColor = colorcito.value;
let movimiento = 4;
let grosor = anchura.value;
let isClick = false;

dibujarTeclado(myColor, x - 1, y, x + 1, y);

function moveWithKey(e) {
  switch (e.keyCode) {
    case teclas.LEFT:
      dibujarTeclado(myColor, x, y, x - movimiento, y);
      x -= movimiento;
      break;
    case teclas.UP:
      dibujarTeclado(myColor, x, y, x, y - movimiento);
      y -= movimiento;
      break;
    case teclas.RIGHT:
      dibujarTeclado(myColor, x, y, x + movimiento, y);
      x += movimiento;
      break;
    case teclas.DOWN:
      dibujarTeclado(myColor, x, y, x, y + movimiento);
      y += movimiento;
      break;

    default:
      break;
  }
}

function dibujarTeclado(color, x_ini, y_ini, x_fin, y_fin) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(x_ini, y_ini);
  lienzo.lineTo(x_fin, y_fin);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(e) {
  if (isClick) {
    dibujarTeclado(myColor, x, y, e.layerX, e.layerY);
    x = e.layerX;
    y = e.layerY;
  }
}

function presionarMouse(e) {
  isClick = true;
  x = e.layerX;
  y = e.layerY;
}

function soltarMouse(e) {
  isClick = false;
  x = e.layerX;
  y = e.layerY;
}

function cambiarGrosor(e) {
  grosor = anchura.value;
}

function cambiarColor() {
  myColor = colorcito.value;
}
