var rootContainer = document.getElementById('root-container');
var imageContainer = document.getElementById('image-container');

var counter = 0;

setInterval(() => {
  counter = counter + 1;
  imageContainer.style.marginLeft = `-${counter}px`;
}, 10);
