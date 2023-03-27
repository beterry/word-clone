import React from "react";

function GuessForm({ onSubmit, disabled }) {
    const [guess, setGuess] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // call handle function in Game to add new guess
        onSubmit(guess);

        // set the form field back to empty
        setGuess('');
    }

    return (
        <form 
            className="guess-input-wrapper"
            onSubmit={(e) => handleSubmit(e)}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                id="guess-input" 
                type="text" 
                required
                disabled={disabled}
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                value={guess}
                onChange={(e) => setGuess(e.target.value.toUpperCase())}
            />
        </form>
    );
}

export default GuessForm;
