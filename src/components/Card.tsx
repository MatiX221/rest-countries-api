import React from "react";
import CountryList from "./CountryList";

const Card = ({ png, name, population, region, capital, getClickedCountry }: any) => {
    function numberWithCommas(x: any) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
        return x;
    }

    const popul = numberWithCommas(population);

    var listOfCapitals: any = "";
    Object.keys(capital).forEach((key) => (listOfCapitals += `, ${capital[key]}`));
    listOfCapitals = listOfCapitals.replace(",", "");

    return (
        <div
            className="card"
            onClick={() => {
                getClickedCountry(name);
            }}
        >
            <div className="card__image">
                <img src={png} />
            </div>
            <div className="card__text">
                <h2>{name}</h2>
                <p>
                    <span className="bolder">Population:</span> {popul}
                </p>
                <p>
                    <span className="bolder">Region:</span> {region}
                </p>
                <p>
                    <span className="bolder">Capital:</span> {listOfCapitals}
                </p>
            </div>
        </div>
    );
};

Card.defaultProps = {
    png: "???",
    name: "???",
    population: "???",
    region: "???",
    capital: "???",
};

export default Card;
