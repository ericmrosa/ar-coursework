// Show popup
function showPopup() {
    document.getElementById('info_popup').style.display = 'block';
}

// Hide popup
function hidePopup() {
    document.getElementById('info_popup').style.display = 'none';
}

// Disable scrolling on mobile
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

// Prevent double-tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
