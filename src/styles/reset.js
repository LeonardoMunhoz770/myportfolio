import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        background-color: ${({ theme }) => theme.colors.backgroundGlobal};
    }

    body::-webkit-scrollbar {
     width: 9px;              
    }

    body::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.backgroundScroll};        
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.scroll};    
        border-radius: 5px;       
    }
    ol, ul {
        list-style: none;
    }

    @font-face {
        font-family: 'outfit';
        src: url("https://fonts.googleapis.com/css2?family=Outfit&display=swap") format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
      }
      
    
`;
