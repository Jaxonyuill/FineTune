class AudioController {
    constructor() {
        this.audioContext = new AudioContext();
        this.gainNode = this.audioContext.createGain();
        this.mediaStream = null;
        this.setupListeners();
    }

    setupListeners() {
        // Listen for audio elements
        document.addEventListener('play', (event) => {
            if (event.target instanceof HTMLAudioElement || event.target instanceof HTMLVideoElement) {
                this.attachToAudioElement(event.target);
            }
        }, true);

        // Message listener for volume updates
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.type === 'UPDATE_VOLUME') {
                this.updateVolume(request.volume);
            }
        });
    }

    attachToAudioElement(audioElement) {
        if (!audioElement) return;

        // Create media element source
        const source = this.audioContext.createMediaElementSource(audioElement);
        
        // Connect source to gain node
        source.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);

        // Set initial volume
        this.gainNode.gain.value = 1.0;
    }

    updateVolume(volume) {
        if (this.gainNode) {
            this.gainNode.gain.value = volume;
        }
    }

    autoAdjustVolume() {
        // TODO: Implement auto-adjust logic
        // This will analyze audio levels and adjust volume accordingly
    }
}

// Initialize the audio controller
const audioController = new AudioController();

// Request initial volume settings
chrome.runtime.sendMessage({ type: 'GET_VOLUME' }, (response) => {
    if (response && response.volume) {
        audioController.updateVolume(response.volume);
    }
});
