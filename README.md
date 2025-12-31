# FineTune - Firefox Extension

## Project Description

FineTune was an intelligent volume control Firefox extension designed to provide persistent volume settings across websites with automatic adjustment capabilities. The extension aimed to solve the common frustration of having to manually adjust volume levels when navigating between different media websites and platforms.

### Intended Features

- **Persistent Volume Settings**: Remember user's preferred volume levels across different websites
- **Auto-Adjustment**: Intelligently adjust volume based on content type and user preferences
- **Cross-Site Consistency**: Maintain consistent audio experience throughout web browsing
- **Simple Interface**: Clean, intuitive popup interface for quick volume management

## Project Status: ABANDONED

### Reason for Abandonment

This project has been abandoned due to technical limitations that made the core functionality impossible to implement reliably. The main challenges encountered were:

1. **Browser Security Restrictions**: Modern browsers implement strict security measures that prevent extensions from reliably controlling audio volume across different origins and media elements.

2. **Cross-Origin Limitations**: Firefox extensions cannot consistently access and manipulate audio elements from different domains due to CORS policies and sandboxing.

3. **Media Element Diversity**: Different websites use vastly different methods for audio playback (HTML5 audio, Web Audio API, Flash, custom players), making a universal solution technically infeasible.

4. **Dynamic Content Loading**: Many modern websites load media content dynamically, making it difficult for extensions to reliably detect and control all audio elements.

### Technical Barriers

- Firefox's content script security model prevents reliable cross-domain audio manipulation
- Many websites use Content Security Policy (CSP) headers that block extension interference
- Audio APIs vary significantly between different media platforms
- Real-time volume adjustment requires deep integration with each website's specific audio implementation

## What Was Built

Before abandonment, the following components were implemented:

- **Basic Extension Structure**: Manifest v3 compliant Firefox extension setup
- **Volume Manager Class**: Core logic for volume state management
- **Storage Integration**: Firefox storage API for persisting user preferences
- **Popup Interface**: Basic HTML/CSS/JS popup for user interaction
- **Content Script Injection**: Framework for injecting scripts into web pages

## Files Overview

- `manifest.json` - Firefox extension configuration
- `background.js` - Service worker with volume management logic
- `content.js` - Content script for page interaction (limited functionality)
- `popup.html/js` - Extension popup interface
- `icons/` - Extension icons and graphics

## Alternative Solution: Windows Desktop Application

While browser extensions face significant limitations, a Windows desktop application could potentially overcome these technical barriers:

### Potential Windows Application Approach

A native Windows application could implement the FineTune concept through:

1. **System-Level Audio Control**: Direct access to Windows audio APIs for comprehensive volume management
2. **Process Monitoring**: Track active applications and browser processes to detect media playback
3. **Audio Session Management**: Utilize Windows Audio Session API (WASAPI) to control audio per-application
4. **Browser Integration**: Use browser automation or accessibility APIs to detect and respond to media content
5. **Global Hotkeys**: System-wide keyboard shortcuts for quick volume adjustments

### Advantages of Desktop Approach

- **Full System Access**: No browser security restrictions
- **Cross-Application Control**: Can manage audio from any application, not just browsers
- **Advanced Audio APIs**: Access to low-level Windows audio management
- **Persistent Settings**: System-wide configuration storage

### Current Status

**No active development** on a Windows application version at this time. This remains a potential future direction but is not currently planned.

## Conclusion

While the concept of a universal volume control extension is valuable, the technical constraints imposed by modern browser security architectures make reliable implementation impossible. This project serves as an example of how browser security policies, while necessary for user protection, can sometimes limit the scope of useful browser enhancements.

For users seeking volume control solutions, browser-level settings or operating system audio management remain the most reliable alternatives.

---

**Last Updated**: December 2025  
**Status**: Abandoned - Technical Limitations
