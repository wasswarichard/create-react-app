import React from 'react';
import spinner from "../../images/spinner.gif"

const FullPageLoader = () => {
    return (
        <div className="fp-container">
            <img src={spinner} className="fp-loader" alt="loading"/>
        </div>
    )
}
export default FullPageLoader;