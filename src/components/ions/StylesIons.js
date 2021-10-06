import {css} from "styled-components";

export const Outline = (color) => css`
    background-color: transparent;
    border: solid 1px ${color};
    color: ${color};
`;