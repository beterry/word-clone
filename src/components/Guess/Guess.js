import React from "react";

import { range } from "../../utils";

function Guess({ guess }) {
    return (
        <p className="guess">
            {range(5).map(num =>
                guess ?
                    <span className={`cell ${guess[num].status}`} key={num}>{guess[num].letter}</span> :
                    <span className="cell" key={num}></span> 
            )}
        </p>
    )
}

export default Guess;
