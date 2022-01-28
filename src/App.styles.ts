import { makeStyles } from "@fluentui/react-components";

export default makeStyles({
  app: {
    textAlign: "center",
  },
  appLogo: {
    height: "40vmin",
    pointerEvents: "none",
  },
  appLogoSpin: {
    "@media (prefers-reduced-motion: no-preference)": {
      animationIterationCount: "infinite",
      animationDuration: "20s",
      animationTimingFunction: "linear",
      animationName: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
    "@media screen and (prefers-reduced-motion: no-preference) and (max-width: 992px)":
      {
        animationIterationCount: "infinite",
        animationDuration: "4s",
        animationTimingFunction: "linear",
        animationName: {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
      },
  },
  appHeader: {
    backgroundColor: "var(--colorNeutralBackground1)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "var(--colorNeutralForeground1)",
  },
  appLinkButton: {
    textDecorationLine: "none",
  },
  appLink: {
    borderBottomColor: "var(--colorNeutralForeground3)",
    color: "var(--colorNeutralForeground3)",
    ":active": {
      borderBottomColor: "var(--colorNeutralForeground2BrandPressed)",
      color: "var(--colorNeutralForeground2BrandPressed)",
    },
    ":hover": {
      borderBottomColor: "var(--colorNeutralForeground2BrandHover)",
      color: "var(--colorNeutralForeground2BrandHover)",
    },
  },
});
