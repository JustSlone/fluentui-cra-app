import React from "react";
import logo from "./logo.svg";
import {
  Button,
  Image,
  Link,
} from "@fluentui/react-components";
import {
  mergeClasses,
} from "@fluentui/react-components";
import useStaticStyles from "./index.styles";
import useAppStyles from "./App.styles";

export const App: React.FC = () => {
  useStaticStyles();
  const classes = useAppStyles();
//   const otherclasses = makeStyles({ 
//     redBox: { background: 'white', color: 'red' },
//     bluBox: { background: "white", color: 'blue' },
//  } 
//  )();
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Image
          src={logo}
          className={mergeClasses(classes.appLogo, classes.appLogoSpin)}
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          className={classes.appLinkButton}
          as="a"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          appearance="primary"
          size="large"
        >
          Learn React
        </Button>
        <br />
        <Link
          // className={mergeClasses(classes.appLink, otherclasses.redBox, otherclasses.bluBox)}
          className={classes.appLink}
          href="https://aka.ms/fluentui-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become Fluent
        </Link>
        <br />
      </header>
    </div>
  );
};

export default App;
