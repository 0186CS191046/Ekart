import React from "react";
import spinner from "../assets/loader.gif"

const Spinner = () => {
    return (
        <div className="m-20 text-center py-20 mx-auto px-4">
            <img
            src={spinner}
            style={{ width: '100px', margin: 'auto', display: 'block' }}
            alt="Loading..."
        />
        </div>
    )
}

export default Spinner;