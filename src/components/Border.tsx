import React from "react";

function Border({ name, getBorder }: any) {
    return (
        <div className="border__btn" onClick={() => getBorder(name)}>
            {name}
        </div>
    );
}

export default Border;
