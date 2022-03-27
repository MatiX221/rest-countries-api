import React from "react";

function CardFlag({ png, name }: any) {
    var commonNativeNames: any = [];
    if (name.nativeName != undefined) {
        Object.keys(name.nativeName).forEach((key, index) => (commonNativeNames[index] = name.nativeName[key]));
    } else {
        commonNativeNames[0] = name.common;
    }

    return (
        <div className="card__image">
            <div className="image__front">
                <img src={png} alt="country flag" />
            </div>
            <div className="image__back">
                <p>Native Name:</p>
                <p>
                    <span className="bolder">{commonNativeNames[0].common}</span>
                </p>
            </div>
        </div>
    );
}

export default CardFlag;
