import React from "react";
import { keyframes } from "styled-components";
import Flag from "./Flag";
import Arrow from "./svg/Arrow";
import Border from "./Border";

function Details({ onclickfunc, country, getBorder, allCountries }: any) {
    const data = country[0];

    function numberWithCommas(x: any) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
        return x;
    }

    const popul = numberWithCommas(data.population);

    var commonNativeNames: any = [];
    var officialNativeNames: any = [];
    var listOfNativeNames: any = [commonNativeNames, officialNativeNames];
    if (data.name.nativeName != undefined) {
        Object.keys(data.name.nativeName).forEach((key, index) => (commonNativeNames[index] = data.name.nativeName[key].common));
        Object.keys(data.name.nativeName).forEach((key, index) => (officialNativeNames[index] = data.name.nativeName[key].official));
    } else {
        listOfNativeNames[0] = data.name.common;
    }

    var listOfCurrencies: any = "";
    if (data.currencies != undefined) {
        Object.keys(data.currencies).forEach((key) => (listOfCurrencies += `, ${data.currencies[key].name} ( ${data.currencies[key].symbol} )`));
        listOfCurrencies = listOfCurrencies.replace(",", "");
    }

    var listOfLanguages: any = "";
    if (data.languages != undefined) {
        Object.keys(data.languages).forEach((key) => (listOfLanguages += `, ${data.languages[key]}`));
        listOfLanguages = listOfLanguages.replace(",", "");
    }

    var listOfCapitals: any = "";
    if (data.capital != undefined) {
        Object.keys(data.capital).forEach((key) => (listOfCapitals += `, ${data.capital[key]}`));
        listOfCapitals = listOfCapitals.replace(",", "");
    }

    var listOfBorders: any = [];
    if (data.borders != undefined) {
        Object.keys(data.borders).forEach((key) => {
            var filtered: any = [];
            filtered[key] = allCountries.filter((country: any) => country.cca3.includes(data.borders[key]));
            listOfBorders[key] = filtered[key][0].name.common;
        });
    }

    return (
        <div className="container__details">
            <div onClick={onclickfunc} className="button button__back">
                <Arrow></Arrow>
                <p>Back</p>
            </div>
            <div className="details">
                <Flag url={data.flags.png}></Flag>
                <div className="details__text">
                    <div className="text">
                        <h2>{data.name.common}</h2>
                        <div className="text__information">
                            <div className="text__general">
                                <div className="general__native">
                                    <p>
                                        <span className="bolder">Native Name:</span> {commonNativeNames[0]}{" "}
                                    </p>
                                </div>
                                <div className="general__population">
                                    <p>
                                        <span className="bolder">Population:</span> {popul}
                                    </p>
                                </div>
                                <div className="general__region">
                                    <p>
                                        <span className="bolder">Region:</span> {data.region}
                                    </p>
                                </div>
                                <div className="general__subregion">
                                    <p>
                                        <span className="bolder">Sub Region:</span> {data.subregion}
                                    </p>
                                </div>
                                <div className="general__capital">
                                    <p>
                                        <span className="bolder">Capital:</span> {listOfCapitals}
                                    </p>
                                </div>
                            </div>
                            <div className="text__additional">
                                <div className="additional__tld">
                                    <p>
                                        <span className="bolder">Top Level Domain:</span> {data.tld[0]}
                                    </p>
                                </div>
                                <div className="additional__currencies">
                                    <p>
                                        <span className="bolder">Currencies:</span> {listOfCurrencies}
                                    </p>
                                </div>
                                <div className="additional__languages">
                                    <p>
                                        <span className="bolder">Languages:</span> {listOfLanguages}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text__borders">
                        <p>
                            <span className="bolder">Border Countries:</span>{" "}
                        </p>
                        <div className="border__container">
                            {listOfBorders.map((border: any, index: any) => (
                                <Border key={index} getBorder={getBorder} name={border}></Border>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
