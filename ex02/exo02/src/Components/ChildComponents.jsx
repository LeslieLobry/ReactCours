import React, { useState } from 'react';

const ChildComponent = ({ characters, addCharacter }) => {
    const [newCharacter, setNewCharacter] = useState({ name: '', age: '' });

    const handleAddCharacter = () => {
        addCharacter({ name: newCharacter.name, age: newCharacter.age });
        setNewCharacter({ name: '', age: '' }); 
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nom du personnage"
                value={newCharacter.name}
                onChange={(e) => setNewCharacter({ ...newCharacter, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Âge du personnage"
                value={newCharacter.age}
                onChange={(e) => setNewCharacter({ ...newCharacter, age: e.target.value })}
            />
            <button onClick={handleAddCharacter}>Ajouter un Personnage</button>
        </div>
    );
};

export default ChildComponent;
