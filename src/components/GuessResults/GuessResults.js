import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from "../../utils";

import Guess from '../Guess';

function GuessResults({ guesses }) {
    // we'll use this number to render blank rows below the user's guesses
    const numOfBlankRows = NUM_OF_GUESSES_ALLOWED - guesses.length;

    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map(num => 
                <Guess guess={guesses[num]} key={num}/>          
            )}
        </div>
    );
}

export default GuessResults;
