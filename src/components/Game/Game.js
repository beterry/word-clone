import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// components
import GuessForm from '../GuessForm'
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState('running');

    const handleNewGuess = (word) => {
        const newGuess = checkGuess(word, answer);

        // add new guess to state
        const nextGuesses = [...guesses, newGuess];

        // if all letters are correct, set the game status to won
        if (word === answer) {
            setGameStatus('won');
        } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
            // if all the letters are not correct, set the game status to lost
            setGameStatus('lost');   
        }

        setGuesses(nextGuesses);
    }

    return <>
        <GuessResults guesses={guesses}/>
        <GuessForm onSubmit={handleNewGuess} disabled={gameStatus !== 'running'}/>
        {gameStatus === 'won' && 
            <Banner status={'happy'}>
                <p>
                    <strong>Congratulations!</strong> Got it in {' '}
                    <strong>{guesses.length} guess{guesses.length > 1 && 'es'}</strong>.
                </p>
            </Banner>
        }
        {gameStatus === 'lost' && 
            <Banner status={'sad'}>
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </Banner>
        }
    </>;
}

export default Game;
