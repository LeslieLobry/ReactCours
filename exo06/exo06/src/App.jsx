import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulaire from './components/Formulaire/Formulaire'
import AffichageContact from './components/AffichageContact/AffichageContact'

const  App=()=> {

const [contacts, setContacts] =useState([])
const nouveauContact = (contact) => {
  setContacts([...contacts, contact])
};

return (
    <>
     <Formulaire addContact={nouveauContact}/>
     <AffichageContact contacts={contacts}/>
    </>
  )
}

export default App
