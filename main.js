var car = document.querySelector('.car');



 function turn(event){
   if(event.key === 'ArrowRight'){
     console.log('right')
   } else if(event.key === 'ArrowLeft'){
     console.log('left')
   } else if (event.key === 'ArrowDown'){
     console.log('down')
   } else if (event.key === 'ArrowUp') {
     console.log('up')
   }
 }

 window.addEventListener('keydown', turn)
