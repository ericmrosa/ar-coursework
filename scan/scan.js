const startButton = document.querySelector('#start-button');

// Ensure the button is initially hidden
startButton.style.display = 'none';

// Add event listeners for all markers
document.querySelectorAll('a-marker').forEach(marker => {
  marker.addEventListener('markerFound', function (event) {
    const detectedMarkerId = event.target.id; // Get the ID of the detected marker
    console.log(`Marker detected: ${detectedMarkerId}`);

    // Update the button to show up and set its action
    showButtonForMarker(detectedMarkerId);
  });

  marker.addEventListener('markerLost', function () {
    // Hide the button when the marker is lost
    startButton.style.display = 'none';
    startButton.onclick = null; // Remove any click handlers to avoid issues
  });
});

// Function to show the button and set its action
function showButtonForMarker(markerId) {
  const routes = {
    'maths': 'maths', 
  };

  // Check if the marker ID exists in the routes object
  if (routes[markerId]) {
    const subject = routes[markerId];
    startButton.style.display = 'block';
    startButton.onclick = function () {
      // Redirect to the appropriate URL when the button is clicked
      const quizUrl = `${window.location.origin}/quiz`;
      console.log(`Redirecting to: ${quizUrl}`);
      window.location.href = quizUrl;
    };
  } else {
    console.warn(`No route defined for marker ID: ${markerId}`);
  }
}
