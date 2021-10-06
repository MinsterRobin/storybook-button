import styled from "styled-components";
import PropTypes from 'prop-types';
import {Outline} from '../ions/StylesIons';
import accessibleColour from "../../global_styles/accessibleColour";
import {darken, opacify, rgba} from "polished";

const Button = styled.button`    
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
    
    width: auto;
    min-width: 10px;
    cursor: pointer;
    border-radius: 6px;
    
    font-family: var(--font-family-primary);
    font-weight: 500;
    font-size: var(--font-size-small);
    
    background-color: ${props => props.theme[props.color]};
    color: ${props => accessibleColour(props.theme[props.color])};
      
    //Outline Ion
    ${props => props.outline ? Outline(props.theme[props.color]) : "border: none"};
    
    ${props => props.noShadows || "box-shadow: 0 2px 3px rgba(51, 51, 51, 0.2)"};
    
    
    transition: all 100ms cubic-bezier(0.68,-0.55,0.27,1.55);;
    
    &:hover,&:focus{
        background-color: ${props =>
            props.outline ?
                opacify(0.05, rgba(0,0,0,0)) :
                darken(0.1, (props.color ?
                    props.theme[props.color] : 
                    props.theme.default
                )
            )
        };
    }
`;

Button.propTypes = {
    icon: PropTypes.shape({
        src: PropTypes.string,
        right: PropTypes.bool
    }),
    noShadows: PropTypes.bool,
    color: PropTypes.oneOf(["primary", "secondary", "danger"]),
    size: PropTypes.oneOf(["small", "large"]),
    outline: PropTypes.bool
};

export default Button