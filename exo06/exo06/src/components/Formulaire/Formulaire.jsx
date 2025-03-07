import { useState } from "react";


const Formulaire = ({addContact}) => {
    const [prenom, setPrenom] = useState();
    const [nom, setNom] = useState();
    const [email, setEmail] = useState();
    const [telephone, setTelephone] = useState();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (prenom && nom && email && telephone){
            const nouveauContact = {
                prenom, 
                nom, 
                email, 
                telephone
            }; 
            addContact(nouveauContact)
            setPrenom('')
            setNom('')
            setEmail('')
            setTelephone('')
        }else(
            alert("Merci de remplir tous les champs")
        )
    }
    const prenomInput = (e) => {
        setPrenom(e.target.value)
    }
    const nomInput = (e) => {
        setNom(e.target.value)
    }
    const emailInput = (e) => {
        setEmail(e.target.value)
    }
    const telephoneInput = (e) => {
        setTelephone(e.target.value)
    }

    return (
        <>  <form onSubmit={handleSubmit}>
            <input type="text" placeholder='prenom' value={prenom} onInput={prenomInput} />
            <input type="text" placeholder='nom' value={nom} onChange={nomInput} />
            <input type="text" placeholder='email' value={email} onChange={emailInput} />
            <input type="text" placeholder='telephone' value={telephone} onChange={telephoneInput} />
            <button type="submit">Ajouter</button>
            </form>
        </>

    );
}

export default Formulaire