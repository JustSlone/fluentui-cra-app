import React from 'react';
import logo from './logo.svg';
import { Image, Button, Link } from '@fluentui/react-components';
import { mergeClasses} from '@fluentui/react-components';
import useStaticStyles from './index.styles';
import useAppStyles from './App.styles';

function App() {
  useStaticStyles();
  const classes = useAppStyles();
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Image src={logo} className={mergeClasses(classes.appLogo, classes.appLogoSpin)} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          className={classes.appLink}
          href="https://reactjs.org"          
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
