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
    appHeader: theme => ({
        backgroundColor: theme.colorNeutralBackground1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: theme.colorNeutralForeground1,
        '@media screen and (max-width: 992px)': {
            backgroundColor: 'rgb(17 18 20)'
        }
    }),
    appLinkButton: {
        textDecoration: 'none'
    },
    appLink: theme => ({        
        borderBottomColor: theme.colorNeutralForeground3,
        color: theme.colorNeutralForeground3,
        ':active': { borderBottomColor: theme.colorNeutralForeground2BrandPressed,  color: theme.colorNeutralForeground2BrandPressed },
        ':hover': { borderBottomColor: theme.colorNeutralForeground2BrandHover, color: theme.colorNeutralForeground2BrandHover },
    }),
});