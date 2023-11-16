import { useContext } from "react";
import { ToggleContainer, ToogleButton } from "./theme-toggle.styled";
import { ThemeContext } from "../../App";

const ThemeToggle = () => {

    const { themeStyles, updateThemeStyles } = useContext(ThemeContext);

    return (
        <ToggleContainer themeStyles={themeStyles}>
            <ToogleButton onClick={updateThemeStyles}>
                Cambiar tema
            </ToogleButton>
        </ToggleContainer>
    )
}

export default ThemeToggle;