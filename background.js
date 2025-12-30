class VolumeManager {
    constructor() {
        this.defaultVolume = 1.0;
        this.autoAdjustEnabled = true;
        this.loadSettings();
        this.setupListeners();
    }

    loadSettings() {
        chrome.storage.local.get(['volume', 'autoAdjust'], (result) => {
            this.volume = result.volume || this.defaultVolume;
            this.autoAdjustEnabled = result.autoAdjust || true;
        });
    }

    saveSettings() {
        chrome.storage.local.set({
            volume: this.volume,
            autoAdjust: this.autoAdjustEnabled
        });
    }

    setupListeners() {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.type === 'GET_VOLUME') {
                sendResponse({ volume: this.volume, autoAdjust: this.autoAdjustEnabled });
            } else if (request.type === 'SET_VOLUME') {
                this.volume = request.volume;
                this.saveSettings();
                sendResponse({ success: true });
            } else if (request.type === 'TOGGLE_AUTO_ADJUST') {
                this.autoAdjustEnabled = !this.autoAdjustEnabled;
                this.saveSettings();
                sendResponse({ autoAdjust: this.autoAdjustEnabled });
            }
        });
    }

    getVolume() {
        return this.volume;
    }

    isAutoAdjustEnabled() {
        return this.autoAdjustEnabled;
    }
}

// Initialize the volume manager
const volumeManager = new VolumeManager();
