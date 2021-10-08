import styled, {useTheme, css} from "styled-components";
import PropTypes from 'prop-types';
import {Outline, Text} from '../ions/StylesIons';
import accessibleColour from "../../global_styles/accessibleColour";
import {darken, opacify, rgba} from "polished";
import React from "react";

const ButtonSC = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:
        ${props =>
            (props.size === "small" && "6px") ||
            (props.size === "large" && "11px") ||
            "8px"
        }
        ${props =>
            (props.size === "small" && "12px") ||
            (props.size === "large" && "22px") ||
            "16px"
    };
    
    min-width: 10px;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    border-radius: 6px;
    
    font-family: ${props => props.theme.font.family};
    font-weight: 500;
    font-size: ${props => props.theme.font.small};
    
    background-color: ${props => props.theme[props.color]};    
    color: ${props => accessibleColour(props.theme[props.color])};
      
    //Outline and Text Ions
    ${props => props.variant === "outline" ? 
        Outline(props.theme[props.color]) :
        "border: none"};
    ${props => props.variant === "text" && Text(props.theme[props.color])};
    
    ${props => (!props.noShadows && props.variant !=="text") && "box-shadow: 0 2px 3px rgba(51, 51, 51, 0.2)"};
            
    opacity: ${props => props.disabled && "0.75"};
    
    transition: all 100ms cubic-bezier(0.68,-0.55,0.27,1.55);
    
    ${props => !props.disabled && css`    
        &:hover,&:focus{
            background-color: ${props => props.variant ?
                opacify(0.05, rgba(0,0,0,0)) :
                darken(0.1, (props.theme[props.color]))
            };
        }`
    }
    
    svg {
        width: 13px;
        height: 14px;
    }
    
    .icon-left {
        margin-right: 8px;
    }
    
    .icon-right {
        margin-left: 8px;
    }
`;

const Button = ({LeftIcon, RightIcon, noShadows, color, size, outline, children, disabled, variant}) => {
    const theme = useTheme();
    return(
        <ButtonSC
            noShadows={noShadows}
            color={color}
            size={size}
            disabled={disabled}
            variant={variant}
            outline={outline}>
                {LeftIcon && <LeftIcon className={"icon-left"} fill={variant ? theme[color] : accessibleColour(theme[color])}/>}
                {children}
                {RightIcon && <RightIcon className={"icon-right"} fill={variant ? theme[color] : accessibleColour(theme[color])}/>}
        </ButtonSC>
    );
};

Button.propTypes = {
    LeftIcon: PropTypes.object,
    RightIcon: PropTypes.object,
    noShadows: PropTypes.bool,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(["text", "outline"]),
    color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]).isRequired,
    size: PropTypes.oneOf(["small", "large"])
};

export default Button;