import React from "react";
import Card from "./Card";
import Select from "./Select";

function CountryList({ inputValue, filterValue, inputChange, filterChange, countries, getClickedCountry }: any) {
    return (
        <div className="container__grid">
            <Select inputValue={inputValue} inputChange={inputChange} filterChange={filterChange} filterValue={filterValue}></Select>
            <div className="card__grid">
                {filterValue === "region"
                    ? countries //
                          .filter((country: any) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
                          .map((country: any, index: any) => <Card png={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} getClickedCountry={getClickedCountry} key={index}></Card>)
                    : countries
                          .filter((country: any) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
                          .filter((country: any) => country.region.includes(filterValue))
                          .map((country: any, index: any) => <Card png={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} getClickedCountry={getClickedCountry} key={index}></Card>)}
            </div>
        </div>
    );
}

export default CountryList;
