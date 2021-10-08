import {css} from "styled-components";

export const Outline = (color) => css`
    background-color: transparent;
    border: solid 1px ${color};
    color: ${color};
`;

export const Text = (color) => css`
    background-color: transparent;
    color: ${color};
`;