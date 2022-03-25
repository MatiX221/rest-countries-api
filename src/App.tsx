import React, { useState, useEffect } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import Details from "./components/Details";

const StyledApp = styled.div``;

function App() {
    const getStoredTheme: any = localStorage.getItem("theme");
    const [theme, setTheme] = useState(getStoredTheme);
    localStorage.setItem(`theme`, `${theme}`);
    const [shown, setShown] = useState("cards");
    const [input, setInput] = useState("");
    const [filer, setFiler] = useState("region");
    const [nameCountry, setNameCountry] = useState("");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const getInputValue = (event: any) => {
        const inputValue = event.target.value;
        setInput(inputValue);
    };

    const getFilterValue = (event: any) => {
        const filterValue = event.target.value;
        setFiler(filterValue);
    };

    const shownToggler = () => {
        shown === "cards" ? setShown("details") : setShown("cards");
    };

    const getClickedCountry = (countryName: any) => {
        setNameCountry(countryName);
        shownToggler();
    };

    const getBorder = (countryName: any) => {
        setNameCountry(countryName);
    };

    const resetToDefault = () => {
        setFiler("region");
        setInput("");
        setShown("cards");
    };

    const [data, setData] = useState<any[]>([]);
    const getData = () => {
        const url = "https://restcountries.com/v3.1/all";
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    const countries = data;

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles></GlobalStyles>
            <StyledApp>
                <Header
                    theme={theme}
                    onclick={() => {
                        themeToggler();
                    }}
                    homePage={resetToDefault}
                ></Header>
                {shown === "cards" ? (
                    <CountryList countries={countries} inputChange={getInputValue} filterChange={getFilterValue} getClickedCountry={getClickedCountry} inputValue={input} filterValue={filer}></CountryList>
                ) : (
                    <Details
                        onclickfunc={() => {
                            shownToggler();
                        }}
                        country={countries.filter((country: any) => country.name.common === nameCountry)}
                        getBorder={getBorder}
                        allCountries={data}
                    ></Details>
                )}
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
