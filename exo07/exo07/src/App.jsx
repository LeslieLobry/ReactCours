import { useState } from 'react'

import './App.css'
import Modal from './Components/Modal/Modal';
import FormComponent from './Components/Form/FormComponent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Hello </h1>
      <button onClick={() => setIsOpen(!isOpen)}>Se connecter</button>
      {isOpen && <Modal closeModal={() => setIsOpen(!isOpen)}><FormComponent /></Modal>}
    </>
  )
}

export default App
