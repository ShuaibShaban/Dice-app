import React, { useState } from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7];

function Dice() {
    const [results, setResults] = useState([]);

    const handleSelection = (name, selection) => {
        setResults([...results, { name, selection }]);
    };

    return (
        <div>
            {results.length < 7 ? (
                <PlayerSelection onSelection={handleSelection} />
            ) : (
                <Results results={results} />
            )}
        </div>
    );
}

function PlayerSelection({ onSelection }) {
    const [name, setName] = useState('');
    const [selection, setSelection] = useState(null);

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleSelectionChange = e => {
        setSelection(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSelection(name, selection);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Selection:
                <select value={selection} onChange={handleSelectionChange}>
                    {numbers.map(number => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

function Results({ results }) {
    return (
        <div>
            <h2>Results</h2>
            <ul>
                {results.map(result => (
                    <li key={result.name}>
                        {result.name} picked {result.selection}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dice;
