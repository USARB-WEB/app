import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('RO');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  }


  return (
    <div className="App">
      <h1>
        {
          language === 'EN' && <>
            This is a React APP
          </>
        }

        {
          language === 'RO' && <>
            Aceasta este o aplicatie React
          </>
        }

      </h1>
      <p>
        {
          language === 'EN' && <>
            This is a simple React app that is created using create-react-app.
          </>
        }

        {
          language === 'RO' && <>
            Aceasta este o aplicatie simpla React care este creata folosind create-react-app.
          </>
        }
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
