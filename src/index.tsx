import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FluentProvider, webLightTheme, webDarkTheme, teamsLightTheme, teamsDarkTheme, Theme, teamsHighContrastTheme, webHighContrastTheme } from '@fluentui/react-components';
import { ThemeSwitcher } from './ThemeSwitcher'

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcher>
      <App />
    </ThemeSwitcher>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
