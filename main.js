/* global data */
var car = document.querySelector('.car');
var $rotationMultiply = 0;

function turn(event) {
  var degrees = 90;

  if (event.key === 'ArrowRight') {
    data.carPosition++;
    $rotationMultiply++;
    degrees = 90 * $rotationMultiply;
    car.style.transform = 'rotate(' + degrees + 'deg)';
    if (data.carPosition === 4) {
      data.carPosition = 0;
    }
  } else if (event.key === 'ArrowLeft') {
    data.carPosition--;
    $rotationMultiply--;
    degrees = 90 * $rotationMultiply;
    car.style.transform = 'rotate(' + degrees + 'deg)';
    if (data.carPosition === -1) {
      data.carPosition = 3;
    }
  }

}

window.addEventListener('keydown', turn);
