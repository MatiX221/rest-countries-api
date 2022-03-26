import { createGlobalStyle } from "styled-components";

const transitionTime = "all 300ms linear";

export const lightTheme = {
    background: "hsl(0, 0%, 88%)",
    color: "hsl(200, 15%, 8%)",
    cardbg: "white",
    shadow: "hsl(0, 0%, 52%)",
    searchbg: "white",
    searchimg: "black",
    searchshadow: "hsl(0, 0%, 52%)",
};

export const darkTheme = {
    background: "hsl(207, 26%, 17%)",
    color: "hsl(0, 0%, 100%)",
    cardbg: "hsl(209, 23%, 22%)",
    shadow: "hsl(209, 23%, 32%)",
    searchbg: "hsl(209, 23%, 22%)",
    searchimg: "white",
    searchshadow: "hsl(200, 15%, 8%)",
};

export const GlobalStyles = createGlobalStyle<{ theme: any }>`

    body {
        transition: ${transitionTime};
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    };
    
    .container__header {
        transition: ${transitionTime};
        box-shadow: 0 0 5px 1px ${(props) => props.theme.shadow};
    }
    
    .card {
        transition: ${transitionTime};
        background-color: ${(props) => props.theme.cardbg};
        box-shadow: 0 0 5px 1px ${(props) => props.theme.shadow};
    };

    .card__image img {
        transition: ${transitionTime};
        box-shadow: 0 0 10px 1px ${(props) => props.theme.shadow};
    }
    
    #filter {
        transition: ${transitionTime};
        background-color: ${(props) => props.theme.searchbg};
        color: ${(props) => props.theme.color};
        box-shadow: 0 0 5px 1px ${(props) => props.theme.searchshadow};
    }
    
    .search {
        transition: ${transitionTime};
        background-color: ${(props) => props.theme.searchbg};
        color: ${(props) => props.theme.color};
        box-shadow: 0px 0px 5px 1px ${(props) => props.theme.searchshadow};
    }

    .search__input {
        transition: ${transitionTime};
        background-color: ${(props) => props.theme.searchbg};
        color: ${(props) => props.theme.color};
    }
    
    .search__image {
        transition: ${transitionTime};
        fill: ${(props) => props.theme.searchimg};
    }
    
    .button__back {
        transition: ${transitionTime};
        fill: ${(props) => props.theme.searchimg};
        background-color: ${(props) => props.theme.searchbg};
        box-shadow: 0 0 5px 1px ${(props) => props.theme.shadow};
    }
    
    .border__btn {
        transition: ${transitionTime};
        background-color: ${(props) => props.theme.cardbg};
    }
`;
