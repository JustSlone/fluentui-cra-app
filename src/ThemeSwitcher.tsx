import { FluentProvider, webLightTheme, webDarkTheme, teamsLightTheme, teamsDarkTheme, Theme, teamsHighContrastTheme, webHighContrastTheme, Menu, MenuTrigger, MenuButton, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components';
import { useState } from 'react';
import useThemeSwitcherStyles from './ThemeSwitcher.styles';

export type ThemeSelection = Record<string, Theme>;

const themes: ThemeSelection = {
    "Web Dark": webDarkTheme,
    "Teams Dark": teamsDarkTheme,
    "Web Light": webLightTheme,
    "Teams Light": teamsLightTheme,
    "Web High Contrast": webHighContrastTheme,
    "Teams High Contrast": teamsHighContrastTheme,
};

export const ThemeSwitcher: React.FC = (props) => {
    let [currentTheme, setCurrentTheme] = useState(Object.keys(themes)[0]);
    const classes = useThemeSwitcherStyles();
    return (
        <FluentProvider theme={themes[currentTheme]}>            
            <Menu>
                <MenuTrigger>
                    <MenuButton className={classes.menuButton}>{currentTheme}</MenuButton>
                </MenuTrigger>
                <MenuPopover>
                    <MenuList >
                        {Object.keys(themes).map((themeName) => <MenuItem onClick={() => setCurrentTheme(themeName)}>{themeName}</MenuItem>)}
                    </MenuList>
                </MenuPopover>
            </Menu>
            {props.children}
        </FluentProvider>)
}