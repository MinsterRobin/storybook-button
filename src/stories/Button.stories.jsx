import React from "react";
import Button from "../components/atoms/Button";
import {THEMES} from "../global_styles/styles";
import {ThemeProvider} from "styled-components";
import {ReactComponent as CheckIcon} from "./assets/check_icon.svg";
import {ReactComponent as CodeIcon} from "./assets/code_icon.svg";
import {ReactComponent as ImportantIcon} from "./assets/important_icon.svg";
import {ReactComponent as SearchIcon} from "./assets/search_icon.svg";
import {ReactComponent as TrashIcon} from "./assets/trash_icon.svg";

const iconMap = {CodeIcon, CheckIcon, ImportantIcon, SearchIcon, TrashIcon};

export default {
    title:'Example/Button',
    component: Button,
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["default", "primary", "secondary", "danger"],
            }
        },
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"],
            }
        },
        variant: {
            control: {
                type: "radio",
                options: ["", "text", "outline"]
            }
        },
        LeftIcon: {
            control: {
                type: "select",
                options: {
                    None: '',
                    CheckIcon: 'CheckIcon',
                    TrashIcon: 'TrashIcon',
                    ImportantIcon: 'ImportantIcon',
                    CodeIcon: 'CodeIcon',
                    SearchIcon: 'SearchIcon'
                }
            }
        },
        RightIcon: {
            control: {
                type: "select",
                options: {
                    None: '',
                    CheckIcon: 'CheckIcon',
                    TrashIcon: 'TrashIcon',
                    ImportantIcon: 'ImportantIcon',
                    CodeIcon: 'CodeIcon',
                    SearchIcon: 'SearchIcon'
                }
            }
        }
    }
};

const Template = (args) => {
    const leftIcon = iconMap[args.LeftIcon];
    const rightIcon = iconMap[args.RightIcon];

    return(
        <ThemeProvider theme={THEMES[0]}>
            <Button {...args} LeftIcon={leftIcon} RightIcon={rightIcon}>Sample Text</Button>
        </ThemeProvider>
    );
};

export const Default = Template.bind({});
Default.args = {
    color: "default"
};

export const Primary = Template.bind({});
Primary.args = {
    color: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary"
};

export const Danger = Template.bind({});
Danger.args = {
    color: "danger"
};