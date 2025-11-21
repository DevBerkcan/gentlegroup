/**
 * Barrierefreie Website Tool - Standalone Version
 * Can be integrated into any website by including this script
 * 
 * Usage:
 * <script src="accessibility-widget.js"></script>
 * <link rel="stylesheet" href="accessibility-widget.css">
 */

(function() {
  'use strict';

  class AccessibilityWidget {
    constructor() {
      this.isOpen = false;
      this.fontSize = 100;
      this.isReading = false;
      this.settings = {
        highContrast: false,
        grayscale: false,
        underlineLinks: false,
        readableFont: false,
        increasedSpacing: false,
        cursorHighlight: false,
        blueFilter: false,
        nightMode: false,
        hideImages: false,
        colorBlindMode: 'none'
      };

      this.init();
    }

    init() {
      // Load saved settings
      this.loadSettings();
      
      // Inject CSS if not already loaded
      this.injectCSS();
      
      // Create widget HTML
      this.createWidget();
      
      // Apply saved settings
      this.applySettings();
      
      // Setup event listeners
      this.setupEventListeners();
    }

    loadSettings() {
      const saved = localStorage.getItem('accessibilitySettings');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          this.settings = parsed.settings || this.settings;
          this.fontSize = parsed.fontSize || 100;
        } catch (e) {
          console.error('Error loading accessibility settings:', e);
        }
      }
    }

    saveSettings() {
      localStorage.setItem('accessibilitySettings', JSON.stringify({
        settings: this.settings,
        fontSize: this.fontSize
      }));
    }

    injectCSS() {
      // Check if CSS is already loaded
      if (document.getElementById('accessibility-widget-styles')) return;

      const link = document.createElement('link');
      link.id = 'accessibility-widget-styles';
      link.rel = 'stylesheet';
      link.href = 'accessibility-widget.css'; // Adjust path as needed
      document.head.appendChild(link);
    }

    createWidget() {
      // Create container
      const container = document.createElement('div');
      container.id = 'accessibility-widget-container';
      container.innerHTML = `
        <button class="accessibility-toggle" 
                aria-label="Barrierefreiheit Menü öffnen" 
                title="Barrierefreiheit Einstellungen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="8" r="1" fill="currentColor"/>
            <path d="M12 12v4"/>
            <path d="M8 14h8"/>
          </svg>
        </button>

        <div class="accessibility-panel" style="display: none;" role="dialog" aria-label="Barrierefreiheit Einstellungen">
          <div class="accessibility-header">
            <h2>Barrierefreiheit</h2>
            <button class="close-button" aria-label="Schließen">×</button>
          </div>

          <div class="accessibility-content">
            <div class="control-group">
              <h3>⚡ Sofortansicht</h3>
              <div class="quick-settings">
                <button class="quick-btn" data-preset="elderly">👴 Senioren</button>
                <button class="quick-btn" data-preset="lowVision">👁️ Sehschwäche</button>
                <button class="quick-btn" data-preset="colorBlind">🎨 Farbschwäche</button>
              </div>
            </div>

            <div class="control-group">
              <h3>🔤 Schriftgröße</h3>
              <div class="font-size-controls">
                <button class="decrease-font" aria-label="Schrift verkleinern">A-</button>
                <span class="font-size-value">100%</span>
                <button class="increase-font" aria-label="Schrift vergrößern">A+</button>
              </div>
            </div>

            <div class="control-group">
              <h3>🎨 Anzeigeoptionen</h3>
              
              <label class="toggle-option">
                <span class="option-icon">⚫⚪</span>
                <input type="checkbox" data-setting="highContrast" aria-label="Hoher Kontrast">
                <span>Kontrastmodus</span>
              </label>

              <label class="toggle-option">
                <span class="option-icon">🌙</span>
                <input type="checkbox" data-setting="nightMode" aria-label="Nachtmodus">
                <span>Nachtmodus</span>
              </label>

              <label class="toggle-option">
                <span class="option-icon">🔵</span>
                <input type="checkbox" data-setting="blueFilter" aria-label="Blaufilter">
                <span>Blaufilter aktivieren</span>
              </label>

              <label class="toggle-option">
                <span class="option-icon">◽</span>
                <input type="checkbox" data-setting="grayscale" aria-label="Graustufen">
                <span>Graustufen</span>
              </label>

              <label class="toggle-option">
                <span class="option-icon">🔗</span>
                <input type="checkbox" data-setting="underlineLinks" aria-label="Links unterstreichen">
                <span>Links unterstreichen</span>
              </label>

              <label class="toggle-option">
                <span class="option-icon">📖</span>
                <input type="checkbox" data-setting="readableFont" aria-label="Lesbare Schriftart">
                <span>Lesbare Schriftart</span>
              </label>

              <label class="toggle-option">
                <span class="option-icon">↕️</span>
                <input type="checkbox" data-setting="increasedSpacing" aria-label="Erhöhter Zeilenabstand">
                <span>Erhöhter Zeilenabstand</span>
              </label>

              <label class="toggle-option">
                <span class="option-icon">🖱️</span>
                <input type="checkbox" data-setting="cursorHighlight" aria-label="Cursor hervorheben">
                <span>Cursor hervorheben</span>
              </label>

              <label class="toggle-option">
                <span class="option-icon">🖼️</span>
                <input type="checkbox" data-setting="hideImages" aria-label="Bilder ausblenden">
                <span>Bilder ausblenden</span>
              </label>
            </div>

            <div class="control-group">
              <h3>🔊 Vorlesefunktion</h3>
              <button class="feature-button tts-button">
                ▶️ Webseite vorlesen
              </button>
            </div>

            <div class="control-group">
              <h3>🎨 Farbschwäche</h3>
              <select class="color-blind-select" aria-label="Farbschwäche Modus auswählen">
                <option value="none">Normal</option>
                <option value="protanopia">Protanopie (Rot-Schwäche)</option>
                <option value="deuteranopia">Deuteranopie (Grün-Schwäche)</option>
                <option value="tritanopia">Tritanopie (Blau-Schwäche)</option>
              </select>
            </div>

            <div class="control-group">
              <button class="reset-button">🔄 Alles zurücksetzen</button>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(container);
    }

    setupEventListeners() {
      const toggleBtn = document.querySelector('.accessibility-toggle');
      const closeBtn = document.querySelector('.close-button');
      const panel = document.querySelector('.accessibility-panel');
      const increaseBtn = document.querySelector('.increase-font');
      const decreaseBtn = document.querySelector('.decrease-font');
      const resetBtn = document.querySelector('.reset-button');
      const checkboxes = document.querySelectorAll('.toggle-option input[type="checkbox"]');
      const ttsBtn = document.querySelector('.tts-button');
      const colorBlindSelect = document.querySelector('.color-blind-select');
      const quickBtns = document.querySelectorAll('.quick-btn');

      // Toggle panel
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.togglePanel();
      });
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.togglePanel();
      });

      // Font size
      increaseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.increaseFontSize();
      });
      decreaseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.decreaseFontSize();
      });

      // Quick settings
      quickBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const preset = e.target.dataset.preset;
          this.applyQuickSettings(preset);
        });
      });

      // Settings checkboxes
      checkboxes.forEach(checkbox => {
        const setting = checkbox.dataset.setting;
        checkbox.checked = this.settings[setting];
        checkbox.addEventListener('change', (e) => {
          this.toggleSetting(setting);
        });
      });

      // Text to speech
      ttsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTextToSpeech();
      });

      // Color blind mode
      colorBlindSelect.value = this.settings.colorBlindMode;
      colorBlindSelect.addEventListener('change', (e) => {
        this.settings.colorBlindMode = e.target.value;
        this.applySettings();
        this.saveSettings();
      });

      // Reset
      resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.resetAll();
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.togglePanel();
        }
      });
    }

    togglePanel() {
      this.isOpen = !this.isOpen;
      const panel = document.querySelector('.accessibility-panel');
      const toggleBtn = document.querySelector('.accessibility-toggle');
      
      if (this.isOpen) {
        panel.style.display = 'flex';
        toggleBtn.setAttribute('aria-expanded', 'true');
      } else {
        panel.style.display = 'none';
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    }

    increaseFontSize() {
      if (this.fontSize < 200) {
        this.fontSize += 10;
        this.updateFontSize();
      }
    }

    decreaseFontSize() {
      if (this.fontSize > 80) {
        this.fontSize -= 10;
        this.updateFontSize();
      }
    }

    updateFontSize() {
      document.querySelector('.font-size-value').textContent = this.fontSize + '%';
      this.applySettings();
      this.saveSettings();
    }

    toggleSetting(setting) {
      this.settings[setting] = !this.settings[setting];
      this.applySettings();
      this.saveSettings();
    }

    applySettings() {
      const root = document.documentElement;
      const body = document.body;

      // Font size
      root.style.setProperty('--base-font-size', `${this.fontSize}%`);

      // Apply classes based on settings
      body.classList.toggle('high-contrast', this.settings.highContrast);
      body.classList.toggle('grayscale', this.settings.grayscale);
      body.classList.toggle('underline-links', this.settings.underlineLinks);
      body.classList.toggle('readable-font', this.settings.readableFont);
      body.classList.toggle('increased-spacing', this.settings.increasedSpacing);
      body.classList.toggle('cursor-highlight', this.settings.cursorHighlight);
      body.classList.toggle('blue-filter', this.settings.blueFilter);
      body.classList.toggle('night-mode', this.settings.nightMode);
      body.classList.toggle('hide-images', this.settings.hideImages);

      // Color blind modes
      body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
      if (this.settings.colorBlindMode !== 'none') {
        body.classList.add(this.settings.colorBlindMode);
      }
    }

    applyQuickSettings(preset) {
      switch(preset) {
        case 'elderly':
          this.fontSize = 140;
          this.settings.readableFont = true;
          this.settings.increasedSpacing = true;
          this.settings.underlineLinks = true;
          break;
        case 'lowVision':
          this.fontSize = 160;
          this.settings.highContrast = true;
          this.settings.underlineLinks = true;
          this.settings.cursorHighlight = true;
          break;
        case 'colorBlind':
          this.settings.colorBlindMode = 'deuteranopia';
          document.querySelector('.color-blind-select').value = 'deuteranopia';
          break;
      }
      
      // Update UI
      document.querySelector('.font-size-value').textContent = this.fontSize + '%';
      document.querySelectorAll('.toggle-option input[type="checkbox"]').forEach(checkbox => {
        const setting = checkbox.dataset.setting;
        checkbox.checked = this.settings[setting];
      });

      this.applySettings();
      this.saveSettings();
    }

    toggleTextToSpeech() {
      const ttsBtn = document.querySelector('.tts-button');
      
      if (this.isReading) {
        window.speechSynthesis.cancel();
        this.isReading = false;
        ttsBtn.classList.remove('active');
        ttsBtn.innerHTML = '▶️ Webseite vorlesen';
      } else {
        const text = document.body.innerText;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.9;
        utterance.onend = () => {
          this.isReading = false;
          ttsBtn.classList.remove('active');
          ttsBtn.innerHTML = '▶️ Webseite vorlesen';
        };
        window.speechSynthesis.speak(utterance);
        this.isReading = true;
        ttsBtn.classList.add('active');
        ttsBtn.innerHTML = '⏸️ Vorlesen stoppen';
      }
    }

    resetAll() {
      window.speechSynthesis.cancel();
      this.isReading = false;
      this.fontSize = 100;
      this.settings = {
        highContrast: false,
        grayscale: false,
        underlineLinks: false,
        readableFont: false,
        increasedSpacing: false,
        cursorHighlight: false,
        blueFilter: false,
        nightMode: false,
        hideImages: false,
        colorBlindMode: 'none'
      };

      // Update UI
      document.querySelector('.font-size-value').textContent = '100%';
      document.querySelectorAll('.toggle-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
      });
      document.querySelector('.color-blind-select').value = 'none';
      
      const ttsBtn = document.querySelector('.tts-button');
      ttsBtn.classList.remove('active');
      ttsBtn.innerHTML = '▶️ Webseite vorlesen';

      this.applySettings();
      localStorage.removeItem('accessibilitySettings');
    }
  }

  // Initialize widget when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.accessibilityWidget = new AccessibilityWidget();
    });
  } else {
    window.accessibilityWidget = new AccessibilityWidget();
  }

})();