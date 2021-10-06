import React from "react";
import {ThemeProvider} from "styled-components";
import {THEMES} from "./global_styles/styles";
import GlobalStyles from "./components/organisms/GlobalStyles";
import Button from "./components/atoms/Button";

function App() {
    return (
        <ThemeProvider theme={THEMES[0]}>
            <GlobalStyles theme={THEMES[0]}/>
            <Button color={"primary"} size={"small"}>Primary</Button>
            <Button color={"primary"} outline size={"small"}>Primary Outline</Button>
            <Button color={"secondary"}>Secondary</Button>
            <Button color={"secondary"} outline>Secondary Outline</Button>
            <Button color={"danger"} size={"large"}>Tertiary</Button>
            <Button color={"danger"} size={"large"} outline>Tertiary Outline</Button>
            <Button noShadows>Test</Button>
        </ThemeProvider>
    );
}

export default App;
