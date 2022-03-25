import React from "react";

function Flag({ url }: any) {
    return (
        <div className="details__flag">
            <img src={url} alt="country flag" />
        </div>
    );
}

export default Flag;
