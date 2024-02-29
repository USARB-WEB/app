import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('RO');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  }

  const translations = {
    'EN': {
      'title': 'This is a React APP',
      'description': 'This is a simple React app that is created using create-react-app.'
    },
    'RO': {
      'title': 'Aceasta este o aplicatie React',
      'description': 'Aceasta este o aplicatie simpla React care este creata folosind create-react-app.'
    } 
  };


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
      </p>
    </div>
  );
}

export default App;
