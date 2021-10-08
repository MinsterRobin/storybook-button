import React from "react";
import {ThemeProvider} from "styled-components";
import {THEMES} from "./global_styles/styles";
import GlobalStyles from "./components/organisms/GlobalStyles";
import Button from "./components/atoms/Button";
import {ReactComponent as CheckIcon} from "./assets/check_icon.svg";
import {ReactComponent as CodeIcon} from "./assets/code_icon.svg";
import {ReactComponent as ImportantIcon} from "./assets/important_icon.svg";
import {ReactComponent as SearchIcon} from "./assets/search_icon.svg";
import {ReactComponent as TrashIcon} from "./assets/trash_icon.svg";

function App() {
    return (
        <ThemeProvider theme={THEMES[0]}>
            <GlobalStyles theme={THEMES[0]}/>
            <Button color={"primary"} disabled LeftIcon={TrashIcon}>Primary Disabled</Button>
            <Button color={"primary"}>Primary</Button>
            <Button color={"secondary"} disabled>Primary Disabled</Button>
            <Button color={"secondary"}>Primary</Button>
            <Button color={"danger"} disabled>Primary Disabled</Button>
            <Button color={"danger"}>Primary</Button>
            <Button color={"default"} disabled>Primary Disabled</Button>
            <Button color={"default"}>Primary</Button>
            <Button color={"primary"} variant={"text"}>Primary</Button>
            <Button color={"primary"} variant={"outline"} size={"small"}>Primary Outline</Button>
            <Button LeftIcon={ImportantIcon} RightIcon={SearchIcon} color={"secondary"}>Secondary</Button>
            <Button color={"secondary"} variant={"outline"}>Secondary Outline</Button>
            <Button color={"danger"} size={"large"}>Tertiary</Button>
            <Button RightIcon={CodeIcon} color={"danger"} size={"large"} variant={"outline"}>Tertiary Outline</Button>
            <Button color={"default"} noShadows disabled>Test</Button>
            <Button RightIcon={CheckIcon} color={"primary"}>Submit</Button>
            <Button RightIcon={CheckIcon} color={"primary"} variant={"text"}>Text Variant</Button>
        </ThemeProvider>
    );
}

export default App;
