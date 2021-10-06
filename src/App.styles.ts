import { makeStyles } from '@fluentui/react-components';

export default makeStyles({
    app: {
      textAlign: 'center',    
    },
    appLogo: {
      height: '40vmin',
      pointerEvents: 'none',
    },
    appLogoSpin: {
      '@media (prefers-reduced-motion: no-preference)': {
        animationIterationCount: 'infinite',
        animationDuration: '20s',
        animationTimingFunction: 'linear',
        animationName: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
    appHeader: {
      backgroundColor: 'rgb(40, 44, 52)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
      '@media screen and (max-width: 992px)': {
        backgroundColor: 'rgb(17 18 20)'
      }    
    },
    appLink: { color: '#61dafb' },
  });