import React from "react";
import Option from "./Option";
import Glass from "./svg/Glass";

function Select({ inputChange, filterChange, inputValue, filterValue }: any) {
    return (
        <div className="container__search">
            <div className="search">
                <Glass></Glass>
                <input className="search__input" type="text" value={inputValue} onInput={inputChange} placeholder="Search for a country..." />
            </div>
            <select name="Filter" id="filter" onChange={filterChange} value={filterValue}>
                <Option region="region" content="All" filterValue={filterValue}></Option>
                <Option region="Africa" content="Africa" filterValue={filterValue}></Option>
                <Option region="Americas" content="America" filterValue={filterValue}></Option>
                <Option region="Asia" content="Asia" filterValue={filterValue}></Option>
                <Option region="Europe" content="Europe" filterValue={filterValue}></Option>
                <Option region="Oceania" content="Oceania" filterValue={filterValue}></Option>
            </select>
        </div>
    );
}

export default Select;
