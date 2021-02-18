var car = document.querySelector('.car');
var position = dataset["carPosition"];



 function turn(event) {
   console.log(event.key);
   if (event.key === 'ArrowRight') {
     position++;
     if (position === 5) {
       position = 1;
     }
   } else if (event.key === 'ArrowLeft') {
     position--
     if (position === 0){
       position = 4;
     }
   }
   console.log(data.carPosition);
 }

 window.addEventListener('keydown', turn)
