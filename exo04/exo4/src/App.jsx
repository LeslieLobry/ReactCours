import { useState } from 'react'

import './App.css'

function App() {
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")

  const prenomInput = (e) => {
    setPrenom(e.target.value)
  }
  const nomInput = (e) => {
    setNom(e.target.value)
  }
//   const changeCase = (e) => {
//     e.preventDefault();
//     setNom(e.target.value.toUpperCase());
// };
  return (
    <>
      <input type="text" placeholder='prenom' value={prenom} onInput={prenomInput} />
      <input type="text" placeholder='nom' value={nom} onChange={nomInput}/*{changeCase}*/  />
      <p> Bonjour <b>{prenom} {nom.toUpperCase()}</b>, bienvenue sur l'application</p>
    </>
  )
}

export default App
