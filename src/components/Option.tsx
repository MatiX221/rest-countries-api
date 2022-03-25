import React from "react";

function Option({ region, content, filterValue }: any) {
    const isValueEqRegion = region === filterValue ? true : false;
    return (
        <option value={region} id={region} className="option" hidden={isValueEqRegion}>
            {region === "region" && isValueEqRegion ? "Filter by region" : content}
        </option>
    );
}

export default Option;
