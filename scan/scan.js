const marker = document.querySelector('#marker');
const startButton = document.querySelector('#start-button');

marker.addEventListener('markerFound', function() {
  startButton.style.display = 'block';
});

marker.addEventListener('markerLost', function() {
  startButton.style.display = 'none';
});

startButton.addEventListener('click', function() {
  alert('Topic started!');
});
