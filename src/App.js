import React, { Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';


// there are several ways to translate components

class LegacyWelcomeClass extends React.Component {
  render() {
    const { t } = this.props;
    return <h2>{t('title')}</h2>;
  }
}

const Welcome = withTranslation()(LegacyWelcomeClass); // our i18next translated component is exported like so



// alternatively, we can translate using the <Trans/> component
const MyComponent = () => {
  return (
    <Trans i18nKey="description.part1">
      <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
    </Trans>
  );
}



// Or, we can simply use the hook provided by react-i18next
const Page = () => {
  const { t, i18n } = useTranslation(); // like so

  const changeLanguage = (givenLanguage) => {
    i18n.changeLanguage(givenLanguage);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <MyComponent />
        <div>{t('description.part2')}</div>
      </div>

    </div>
  );
}

const Loader = () => ( // our suspense fallback
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>Loading translation...</div>
  </div>
);

const App = () => { // catch the suspense from our page in case translations are not yet loaded
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;