document.addEventListener('DOMContentLoaded', function() {
    const volumeSlider = document.getElementById('volumeSlider');
    const autoAdjustToggle = document.getElementById('autoAdjustToggle');
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');

    // Initialize volume and auto-adjust state
    chrome.runtime.sendMessage({ type: 'GET_VOLUME' }, (response) => {
        if (response) {
            volumeSlider.value = response.volume;
            autoAdjustToggle.classList.toggle('active', response.autoAdjust);
            updateStatusDisplay(response.autoAdjust);
        }
    });

    // Volume slider change handler
    volumeSlider.addEventListener('input', function() {
        const volume = parseFloat(this.value);
        chrome.runtime.sendMessage({ type: 'SET_VOLUME', volume: volume });
    });

    // Auto-adjust toggle handler
    autoAdjustToggle.addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: 'TOGGLE_AUTO_ADJUST' }, (response) => {
            if (response) {
                this.classList.toggle('active', response.autoAdjust);
                updateStatusDisplay(response.autoAdjust);
            }
        });
    });

    function updateStatusDisplay(isActive) {
        statusDot.classList.toggle('active', isActive);
        statusText.textContent = `Auto-adjust: ${isActive ? 'On' : 'Off'}`;
    }
});
