import {createGlobalStyle} from "styled-components";
import {FONTS} from "../../global_styles/styles";
import PropTypes from 'prop-types';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    html {        
        font-size: 62.5%;
        
        --color-primary: ${props => props.theme.primary};
        --color-secondary: ${props => props.theme.secondary};
        --color-danger: ${props => props.theme.danger};
        
        --font-size-very-small: ${FONTS.very_small};
        --font-size-small: ${FONTS.small};
        --font-size-regular: ${FONTS.regular};
        --font-size-medium: ${FONTS.medium};
        --font-size-large: ${FONTS.large};
        --font-size-very-large: ${FONTS.very_large};
        
        --font-family-primary: 'Montserrat', serif; //DEBUG
        --font-family-secondary: 'Playfair Display', serif; //DEBUG
        
        --padding-size: 40px;
        
        background-color: ${props => props.theme.background};
        
        @media (max-width: 768px) {
            --padding-size: 20px;
        }
    }
`;

GlobalStyles.propTypes = {
    theme: PropTypes.object.isRequired
};
export default GlobalStyles;