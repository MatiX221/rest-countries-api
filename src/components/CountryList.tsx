import React from "react";
import Card from "./Card";
import Select from "./Select";

function CountryList({ inputValue, filterValue, inputChange, filterChange, countries, getClickedCountry }: any) {
    const lowerInput = inputValue.toLowerCase();
    const isShown = (country: any) => {
        var commonNameList: any = [];
        var officialNameList: any = [];
        var translationsCommon: any = [];
        var translationsOfficial: any = [];

        if (country.name.nativeName != undefined) {
            Object.keys(country.name.nativeName).forEach((key: any, index: any) => {
                commonNameList[index] = country.name.nativeName[key].common;
                officialNameList[index] = country.name.nativeName[key].official;
            });
        }

        if (country.translations != undefined) {
            Object.keys(country.translations).forEach((key: any, index: any) => {
                translationsCommon[index] = country.translations[key].common;
                translationsOfficial[index] = country.translations[key].official;
            });
        }

        var isNativeName = "";
        Object.keys(commonNameList).forEach((index: any) => {
            if (commonNameList[index].toLowerCase().includes(lowerInput)) {
                isNativeName = "true";
            }
        });
        Object.keys(officialNameList).forEach((index: any) => {
            if (officialNameList[index].toLowerCase().includes(lowerInput)) {
                isNativeName = "true";
            }
        });
        Object.keys(translationsCommon).forEach((index: any) => {
            if (translationsCommon[index].toLowerCase().includes(lowerInput)) {
                isNativeName = "true";
            }
        });
        Object.keys(translationsOfficial).forEach((index: any) => {
            if (translationsOfficial[index].toLowerCase().includes(lowerInput)) {
                isNativeName = "true";
            }
        });

        if (
            country.name.common.toLowerCase().includes(lowerInput) || //
            country.cca2.toLowerCase().includes(lowerInput) || //
            country.cca3.toLowerCase().includes(lowerInput) || //
            isNativeName === "true"
        ) {
            return true;
        }

        return false;
    };

    return (
        <div className="container__grid">
            <Select inputValue={inputValue} inputChange={inputChange} filterChange={filterChange} filterValue={filterValue}></Select>
            <div className="card__grid">
                {filterValue === "region"
                    ? countries //
                          .filter((country: any) => isShown(country))
                          .map((country: any, index: any) => <Card png={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} nameList={country.name} getClickedCountry={getClickedCountry} key={index}></Card>)
                    : countries
                          .filter((country: any) => isShown(country))
                          .filter((country: any) => country.region.includes(filterValue))
                          .map((country: any, index: any) => <Card png={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} nameList={country.name} getClickedCountry={getClickedCountry} key={index}></Card>)}
            </div>
        </div>
    );
}

export default CountryList;
