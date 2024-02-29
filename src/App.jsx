import React, { useState } from 'react';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const [language, setLanguage] = useState('en');

  const { t, i18n } = useTranslation();
  

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <h1>
        { t('title') }
      </h1>
      <p>
        { t('description') }
      </p>
      <p>
        <button
          className={language === 'en' ? 'selected-language' : ''}
          disabled={language === 'en'}
          onClick={() => changeLanguage('en')}
        >EN</button>
        <button
          className={language === 'ro' ? 'selected-language' : ''}
          disabled={language === 'ro'}
          onClick={() => changeLanguage('ro')}
        >RO</button>
        <button
          className={language === 'de' ? 'selected-language' : ''}
          disabled={language === 'de'}
          onClick={() => changeLanguage('de')}
        >
          DE
        </button>
      </p>
      <hr />
      <p>
        Home page title: { t('home_page.title') }
      </p>
    </div>
  );
}

export default App;
