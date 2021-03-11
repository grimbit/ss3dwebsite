import { createGlobalStyle } from 'styled-components';
import RobotoFont from './Roboto-Regular.ttf';

export default createGlobalStyle`

    @font-face {
        font-family: 'RobotoFont';
        font-weight: 300;
        font-style: normal;
        src: url(${RobotoFont}) format('truetype');
    }
`;
