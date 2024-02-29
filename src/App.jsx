import React, { useState } from 'react';
import './App.css';
import translations from './translations';

function App() {
  const [language, setLanguage] = useState('RO');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  }

  return (
    <div className="App">
      <h1>
        { translations[language]['title'] }
      </h1>
      <p>
        { translations[language]['description'] }
      </p>
      <p>
        <button
          className={language === 'EN' ? 'selected-language' : ''}
          disabled={language === 'EN'}
          onClick={() => changeLanguage('EN')}
        >EN</button>
        <button
          className={language === 'RO' ? 'selected-language' : ''}
          disabled={language === 'RO'}
          onClick={() => changeLanguage('RO')}
        >RO</button>
        <button
          className={language === 'DE' ? 'selected-language' : ''}
          disabled={language === 'DE'}
          onClick={() => changeLanguage('DE')}
        >
          DE
        </button>
      </p>
    </div>
  );
}

export default App;
