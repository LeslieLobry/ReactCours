import React, { useState } from 'react';
import ChildComponent from './ChildComponents';

const ParentComponent = () => {
    const [characters, setCharacters] = useState([
        { name: 'Harry James Potter', age: 'Né le 31 juillet 1980' },
        { name: 'Hermione Jean Granger', age: 'Née le 19 septembre 1979' },
        { name: 'Ronald Bilius "Ron" Weasley', age: 'Né le 1er mars 1980' },
        { name: 'Albus Percival Wulfric Brian Dumbledore', age: 'Né en 1881, décédé en 1997 (116 ans)' }
    ]);

    const addCharacter = (character) => {
        setCharacters([...characters, character]);
    };

    return (
        <div>
            <h1>Personnages de Harry Potter</h1>
            <ul>
                {characters.map((character, index) => (
                    <li key={index}>{character.name}: {character.age}</li>
                ))}
            </ul>
            <ChildComponent characters={characters} addCharacter={addCharacter} />
        </div>
    );
};

export default ParentComponent;
