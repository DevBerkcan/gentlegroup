// components/AccessibilityTool.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import '../styles/AccessibilityTool.css';

interface AccessibilitySettings {
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
  increasedSpacing: boolean;
  cursorHighlight: boolean;
  blueFilter: boolean;
  blueFilterAuto: boolean;
  nightMode: boolean;
  hideImages: boolean;
  colorBlindMode: ColorBlindMode;
  largePointer: boolean;
  muteSound: boolean;
  saturationMode: boolean;
  focusIndicators: boolean;
  textSpacing: boolean;
  stopAnimations: boolean;
  readingGuide: boolean;
}

type ColorBlindMode = 'none' | 'protanopia' | 'protanomaly' | 'deuteranopia' | 'deuteranomaly' | 'tritanopia' | 'tritanomaly' | 'achromatopsia';
type SettingKey = keyof Omit<AccessibilitySettings, 'colorBlindMode'>;
type QuickPreset = 'elderly' | 'lowVision' | 'colorBlind';
type Language = 'de' | 'en';

interface SavedSettings {
  settings: AccessibilitySettings;
  fontSize: number;
  language: Language;
}

interface Position {
  x: number;
  y: number;
}

const translations = {
  de: {
    title: 'Barrierefreiheit',
    close: 'Schließen',
    settings: 'Einstellungen',
    language: 'Sprache',
    reset: 'Zurücksetzen',
    quickView: 'Schnellansicht',
    elderly: '👴 Senioren',
    lowVision: '👁️ Sehschwäche',
    colorBlind: '🎨 Farbschwäche',
    fontSize: '🔤 Schriftgröße',
    displayOptions: '🎨 Anzeigeoptionen',
    contrastMode: 'Kontrastmodus',
    nightMode: 'Nachtmodus',
    blueFilter: 'Blaufilter aktivieren',
    blueFilterAuto: 'Blaufilter automatisch',
    grayscale: 'Graustufen',
    underlineLinks: 'Links unterstreichen',
    readableFont: 'Lesbare Schriftart',
    increasedSpacing: 'Erhöhter Zeilenabstand',
    cursorHighlight: 'Cursor hervorheben',
    hideImages: 'Bilder ausblenden',
    textToSpeech: '🔊 Vorlesefunktion',
    readWebsite: '▶️ Webseite vorlesen',
    stopReading: '⏸️ Vorlesen stoppen',
    pauseReading: '⏸️ Pause',
    resumeReading: '▶️ Fortsetzen',
    normal: 'Normal',
    colorBlindModeLabel: 'Farbsehschwäche-Modus',
    protanopia: 'Rotschwäche (Protanopie)',
    protanomaly: 'Rotschwäche (Protanomalie)',
    deuteranopia: 'Grünschwäche (Deuteranopie)',
    deuteranomaly: 'Grünschwäche (Deuteranomalie)',
    tritanopia: 'Blauschwäche (Tritanopie)',
    tritanomaly: 'Blauschwäche (Tritanomalie)',
    achromatopsia: 'Farbenblindheit',
    saturationMode: 'Sättigungs-Modus',
    moreFeatures: '➕ Weitere Funktionen',
    largePointer: 'Größerer Mauszeiger',
    muteSound: 'Ton ausschalten',
    focusIndicators: 'Verbesserte Fokus-Anzeige',
    textSpacing: 'Optimierter Textabstand',
    stopAnimations: 'Animationen stoppen',
    readingGuide: 'Lesehilfe aktivieren',
    resetAll: '🔄 Alles zurücksetzen',
  },
  en: {
    title: 'Accessibility',
    close: 'Close',
    settings: 'Settings',
    language: 'Language',
    reset: 'Reset',
    quickView: 'Quick View',
    elderly: '👴 Elderly',
    lowVision: '👁️ Low Vision',
    colorBlind: '🎨 Color Blind',
    fontSize: '🔤 Font Size',
    displayOptions: '🎨 Display Options',
    contrastMode: 'Contrast Mode',
    nightMode: 'Night Mode',
    blueFilter: 'Enable Blue Filter',
    blueFilterAuto: 'Auto Blue Filter',
    grayscale: 'Grayscale',
    underlineLinks: 'Underline Links',
    readableFont: 'Readable Font',
    increasedSpacing: 'Increased Spacing',
    cursorHighlight: 'Cursor Highlight',
    hideImages: 'Hide Images',
    textToSpeech: '🔊 Text to Speech',
    readWebsite: '▶️ Read Website',
    stopReading: '⏸️ Stop Reading',
    pauseReading: '⏸️ Pause',
    resumeReading: '▶️ Resume',
    normal: 'Normal',
    colorBlindModeLabel: 'Color Blind Mode',
    protanopia: 'Red Weakness (Protanopia)',
    protanomaly: 'Red Weakness (Protanomaly)',
    deuteranopia: 'Green Weakness (Deuteranopia)',
    deuteranomaly: 'Green Weakness (Deuteranomaly)',
    tritanopia: 'Blue Weakness (Tritanopia)',
    tritanomaly: 'Blue Weakness (Tritanomaly)',
    achromatopsia: 'Color Blindness',
    saturationMode: 'Saturation Mode',
    moreFeatures: '➕ More Features',
    largePointer: 'Large Mouse Pointer',
    muteSound: 'Mute Sound',
    focusIndicators: 'Enhanced Focus Indicators',
    textSpacing: 'Optimized Text Spacing',
    stopAnimations: 'Stop Animations',
    readingGuide: 'Enable Reading Guide',
    resetAll: '🔄 Reset All',
  }
};

const AccessibilityTool: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('de');
  const [fontSize, setFontSize] = useState<number>(100);
  const [position, setPosition] = useState<Position>({ x: 20, y: 50 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);
  
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    grayscale: false,
    underlineLinks: false,
    readableFont: false,
    increasedSpacing: false,
    cursorHighlight: false,
    blueFilter: false,
    blueFilterAuto: false,
    nightMode: false,
    hideImages: false,
    colorBlindMode: 'none',
    largePointer: false,
    muteSound: false,
    saturationMode: false,
    focusIndicators: false,
    textSpacing: false,
    stopAnimations: false,
    readingGuide: false,
  });
  const [isReading, setIsReading] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const t = translations[language];

  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      try {
        const parsed: SavedSettings = JSON.parse(savedSettings);
        setSettings(parsed.settings || settings);
        setFontSize(parsed.fontSize || 100);
        setLanguage(parsed.language || 'de');
      } catch (e) {
        console.error('Error loading accessibility settings:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify({
      settings,
      fontSize,
      language
    }));
    applySettings();
  }, [settings, fontSize, language]);

  useEffect(() => {
    if (settings.blueFilterAuto) {
      const checkTime = () => {
        const hour = new Date().getHours();
        const shouldEnableFilter = hour >= 20 || hour <= 6;
        if (shouldEnableFilter !== settings.blueFilter) {
          setSettings(prev => ({ ...prev, blueFilter: shouldEnableFilter }));
        }
      };
      checkTime();
      const interval = setInterval(checkTime, 60000);
      return () => clearInterval(interval);
    }
  }, [settings.blueFilterAuto]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && panelRef.current) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        const maxX = window.innerWidth - panelRef.current.offsetWidth;
        const maxY = window.innerHeight - panelRef.current.offsetHeight;
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (panelRef.current && e.target === e.currentTarget) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

const applySettings = (): void => {
  const root = document.documentElement
  const body = document.body
  const pageRoot = document.getElementById('page-root')

  // ✅ Font size
  root.style.fontSize = `${fontSize}%`

  // ✅ Remove old page filters
  if (pageRoot) pageRoot.style.filter = ''

  // ✅ Toggle classes
  body.classList.toggle('high-contrast', settings.highContrast)
  body.classList.toggle('underline-links', settings.underlineLinks)
  body.classList.toggle('readable-font', settings.readableFont)
  body.classList.toggle('increased-spacing', settings.increasedSpacing)
  body.classList.toggle('cursor-highlight', settings.cursorHighlight)
  body.classList.toggle('night-mode', settings.nightMode)
  body.classList.toggle('hide-images', settings.hideImages)
  body.classList.toggle('large-pointer', settings.largePointer)
  body.classList.toggle('mute-sound', settings.muteSound)
  body.classList.toggle('focus-indicators', settings.focusIndicators)
  body.classList.toggle('text-spacing', settings.textSpacing)
  body.classList.toggle('stop-animations', settings.stopAnimations)
  body.classList.toggle('reading-guide', settings.readingGuide)

  // ✅ COLOR FILTERS (APPLY ONLY TO PAGE CONTENT)
  const filters: string[] = []

  if (settings.grayscale) filters.push('grayscale(100%)')
  if (settings.blueFilter) filters.push('sepia(20%) saturate(70%)')
  if (settings.saturationMode) filters.push('saturate(150%)')

  if (filters.length && pageRoot) {
    pageRoot.style.filter = filters.join(' ')
  }

  // ✅ REMOVE OLD COLOR MODES
  pageRoot?.classList.remove(
    'protanopia', 'protanomaly', 'deuteranopia',
    'deuteranomaly', 'tritanopia', 'tritanomaly', 'achromatopsia'
  )

  // ✅ APPLY COLOR MODE
  if (settings.colorBlindMode !== 'none') {
    pageRoot?.classList.add(settings.colorBlindMode)
  }

  // ✅ FORCE PANEL POSITION STABILITY
  if (panelRef.current) {
    panelRef.current.style.left = `${position.x}px`
    panelRef.current.style.top = `${position.y}px`
  }
}


const toggleSetting = (setting: SettingKey): void => {
  setSettings(prev => ({
    ...prev,
    [setting]: !prev[setting]
  }));
  
  // Force position preservation after state update
  setTimeout(() => {
    if (panelRef.current) {
      const panel = panelRef.current;
      panel.style.left = `${position.x}px`;
      panel.style.top = `${position.y}px`;
      panel.style.transform = 'none';
    }
  }, 0);
};

  const setColorBlindMode = (mode: ColorBlindMode): void => {
    setSettings(prev => ({
      ...prev,
      colorBlindMode: mode
    }));
  };

  const toggleTextToSpeech = (): void => {
    if (isReading && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isReading && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      // Get all text from page-root, excluding navigation and accessibility panel
      const pageRoot = document.getElementById('page-root');
      let text = '';
      
      if (pageRoot) {
        // Clone the element to avoid modifying the DOM
        const clone = pageRoot.cloneNode(true) as HTMLElement;
        
        // Remove script and style tags
        clone.querySelectorAll('script, style, nav, header, .navigation').forEach(el => el.remove());
        
        text = clone.innerText;
      } else {
        text = document.body.innerText;
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onend = () => {
        setIsReading(false);
        setIsPaused(false);
      };
      
      utterance.onerror = () => {
        setIsReading(false);
        setIsPaused(false);
      };
      
      utteranceRef.current = utterance;
      window.speechSynthesis.cancel(); // Clear any previous speech
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
      setIsPaused(false);
    }
  };

  const stopTextToSpeech = (): void => {
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
  };

  const quickSettings = (preset: QuickPreset): void => {
    switch(preset) {
      case 'elderly':
        setFontSize(140);
        setSettings(prev => ({
          ...prev,
          readableFont: true,
          increasedSpacing: true,
          underlineLinks: true,
          textSpacing: true,
          focusIndicators: true,
        }));
        break;
      case 'lowVision':
        setFontSize(160);
        setSettings(prev => ({
          ...prev,
          highContrast: true,
          underlineLinks: true,
          cursorHighlight: true,
          focusIndicators: true,
          largePointer: true,
        }));
        break;
      case 'colorBlind':
        setSettings(prev => ({
          ...prev,
          colorBlindMode: 'deuteranomaly',
          underlineLinks: true,
        }));
        break;
    }
  };

  const increaseFontSize = (): void => {
    setFontSize(prev => Math.min(prev + 10, 200));
  };

  const decreaseFontSize = (): void => {
    setFontSize(prev => Math.max(prev - 10, 80));
  };

  const resetAll = (): void => {
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
    setFontSize(100);
    setSettings({
      highContrast: false,
      grayscale: false,
      underlineLinks: false,
      readableFont: false,
      increasedSpacing: false,
      cursorHighlight: false,
      blueFilter: false,
      blueFilterAuto: false,
      nightMode: false,
      hideImages: false,
      colorBlindMode: 'none',
      largePointer: false,
      muteSound: false,
      saturationMode: false,
      focusIndicators: false,
      textSpacing: false,
      stopAnimations: false,
      readingGuide: false,
    });
    localStorage.removeItem('accessibilitySettings');
  };

  return (
    <>
      <button
        className="accessibility-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.title}
        aria-expanded={isOpen}
        title={t.title}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v2"/>
          <path d="M12 10v2"/>
          <path d="M12 14v2"/>
          <path d="M12 18v.01"/>
          <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
          <path d="M8 14h8"/>
        </svg>
      </button>

      {isOpen && (
        <div 
          ref={panelRef}
          className={`accessibility-panel ${isDragging ? 'dragging' : ''}`}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'none'
          }}
          role="dialog" 
          aria-label={t.title}
        >
          <div 
            className="accessibility-header"
            onMouseDown={handleDragStart}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <h2>{t.title}</h2>
            <div className="header-buttons">
              <button
                className="reset-header-button"
                onClick={resetAll}
                aria-label={t.reset}
                title={t.reset}
              >
                🔄
              </button>
              <button
                className="settings-button"
                onClick={() => setShowSettings(!showSettings)}
                aria-label={t.settings}
                title={t.settings}
              >
                ⚙️
              </button>
              <button
                className="close-button"
                onClick={() => setIsOpen(false)}
                aria-label={t.close}
              >
                ×
              </button>
            </div>
          </div>

          {showSettings && (
            <div className="settings-panel">
              <h3>{t.settings}</h3>
              <label className="language-select-label">
                <span>{t.language}:</span>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="language-select"
                >
                  <option value="de">Deutsch</option>
                  <option value="en">English</option>
                </select>
              </label>
            </div>
          )}

          <div className="accessibility-content">
            <div className="control-group">
              <h3>{t.quickView}</h3>
              <div className="quick-settings">
                <button onClick={() => quickSettings('elderly')} className="quick-btn">
                  {t.elderly}
                </button>
                <button onClick={() => quickSettings('lowVision')} className="quick-btn">
                  {t.lowVision}
                </button>
                <button onClick={() => quickSettings('colorBlind')} className="quick-btn">
                  {t.colorBlind}
                </button>
              </div>
            </div>

            <div className="control-group">
              <h3>{t.fontSize}</h3>
              <div className="font-size-controls">
                <button
                  onClick={decreaseFontSize}
                  aria-label="Decrease font size"
                  disabled={fontSize <= 80}
                >
                  A-
                </button>
                <span className="font-size-value">{fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  aria-label="Increase font size"
                  disabled={fontSize >= 200}
                >
                  A+
                </button>
              </div>
            </div>

            <div className="control-group">
              <h3>{t.displayOptions}</h3>
              
              <label className="toggle-option">
                <span className="option-icon">⚫⚪</span>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={() => toggleSetting('highContrast')}
                />
                <span>{t.contrastMode}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">🌙</span>
                <input
                  type="checkbox"
                  checked={settings.nightMode}
                  onChange={() => toggleSetting('nightMode')}
                />
                <span>{t.nightMode}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">🔵</span>
                <input
                  type="checkbox"
                  checked={settings.blueFilter}
                  onChange={() => toggleSetting('blueFilter')}
                />
                <span>{t.blueFilter}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">🕐</span>
                <input
                  type="checkbox"
                  checked={settings.blueFilterAuto}
                  onChange={() => toggleSetting('blueFilterAuto')}
                />
                <span>{t.blueFilterAuto}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">🎨</span>
                <input
                  type="checkbox"
                  checked={settings.saturationMode}
                  onChange={() => toggleSetting('saturationMode')}
                />
                <span>{t.saturationMode}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">◽</span>
                <input
                  type="checkbox"
                  checked={settings.grayscale}
                  onChange={() => toggleSetting('grayscale')}
                />
                <span>{t.grayscale}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">🔗</span>
                <input
                  type="checkbox"
                  checked={settings.underlineLinks}
                  onChange={() => toggleSetting('underlineLinks')}
                />
                <span>{t.underlineLinks}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">📖</span>
                <input
                  type="checkbox"
                  checked={settings.readableFont}
                  onChange={() => toggleSetting('readableFont')}
                />
                <span>{t.readableFont}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">↕️</span>
                <input
                  type="checkbox"
                  checked={settings.increasedSpacing}
                  onChange={() => toggleSetting('increasedSpacing')}
                />
                <span>{t.increasedSpacing}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">🖱️</span>
                <input
                  type="checkbox"
                  checked={settings.cursorHighlight}
                  onChange={() => toggleSetting('cursorHighlight')}
                />
                <span>{t.cursorHighlight}</span>
              </label>

              <label className="toggle-option">
                <span className="option-icon">🖼️</span>
                <input
                  type="checkbox"
                  checked={settings.hideImages}
                  onChange={() => toggleSetting('hideImages')}
                />
                <span>{t.hideImages}</span>
              </label>

              <div className="color-blind-mode-selector">
                <label htmlFor="color-blind-select" className="color-blind-label">
                  <span className="option-icon">🎨</span>
                  <span>{t.colorBlindModeLabel}:</span>
                </label>
                <select
                  id="color-blind-select"
                  className="color-blind-select"
                  value={settings.colorBlindMode}
                  onChange={(e) => setColorBlindMode(e.target.value as ColorBlindMode)}
                >
                  <option value="none">{t.normal}</option>
                  <option value="protanopia">{t.protanopia}</option>
                  <option value="protanomaly">{t.protanomaly}</option>
                  <option value="deuteranopia">{t.deuteranopia}</option>
                  <option value="deuteranomaly">{t.deuteranomaly}</option>
                  <option value="tritanopia">{t.tritanopia}</option>
                  <option value="tritanomaly">{t.tritanomaly}</option>
                  <option value="achromatopsia">{t.achromatopsia}</option>
                </select>
              </div>
            </div>

            <div className="control-group">
              <h3>{t.textToSpeech}</h3>
              <div className="tts-controls">
                <button 
                  className={`feature-button ${isReading && !isPaused ? 'active' : ''}`}
                  onClick={toggleTextToSpeech}
                >
                  {isReading && !isPaused ? t.pauseReading : 
                   isReading && isPaused ? t.resumeReading : 
                   t.readWebsite}
                </button>
                {isReading && (
                  <button 
                    className="feature-button stop-button"
                    onClick={stopTextToSpeech}
                  >
                    {t.stopReading}
                  </button>
                )}
              </div>
            </div>

            <div className="control-group">
              <button 
                className="expand-button"
                onClick={() => setShowMoreFeatures(!showMoreFeatures)}
              >
                {t.moreFeatures} {showMoreFeatures ? '▲' : '▼'}
              </button>
              
              {showMoreFeatures && (
                <div className="more-features">
                  <label className="toggle-option">
                    <span className="option-icon">🖱️</span>
                    <input
                      type="checkbox"
                      checked={settings.largePointer}
                      onChange={() => toggleSetting('largePointer')}
                    />
                    <span>{t.largePointer}</span>
                  </label>

                  <label className="toggle-option">
                    <span className="option-icon">🔇</span>
                    <input
                      type="checkbox"
                      checked={settings.muteSound}
                      onChange={() => toggleSetting('muteSound')}
                    />
                    <span>{t.muteSound}</span>
                  </label>

                  <label className="toggle-option">
                    <span className="option-icon">🎯</span>
                    <input
                      type="checkbox"
                      checked={settings.focusIndicators}
                      onChange={() => toggleSetting('focusIndicators')}
                    />
                    <span>{t.focusIndicators}</span>
                  </label>

                  <label className="toggle-option">
                    <span className="option-icon">📏</span>
                    <input
                      type="checkbox"
                      checked={settings.textSpacing}
                      onChange={() => toggleSetting('textSpacing')}
                    />
                    <span>{t.textSpacing}</span>
                  </label>

                  <label className="toggle-option">
                    <span className="option-icon">⏸️</span>
                    <input
                      type="checkbox"
                      checked={settings.stopAnimations}
                      onChange={() => toggleSetting('stopAnimations')}
                    />
                    <span>{t.stopAnimations}</span>
                  </label>

                  <label className="toggle-option">
                    <span className="option-icon">📍</span>
                    <input
                      type="checkbox"
                      checked={settings.readingGuide}
                      onChange={() => toggleSetting('readingGuide')}
                    />
                    <span>{t.readingGuide}</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityTool;