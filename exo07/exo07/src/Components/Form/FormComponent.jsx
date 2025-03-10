import { useRef } from 'react';

const FormComponent = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;

    console.log("Nom d'utilisateur : ", userName);
    console.log("Mot de passe :", password);

    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Nom d'utilisateur">Nom d'utilisateur : </label>
          <input type="text" name="Nom d'utilisateur" ref={userNameRef} required />
        </div>
        <div>
          <label htmlFor="Mot de passe">Mot de passe : </label>
          <input type="password" name="Mot de passe" ref={passwordRef} required />
        </div>
        <button type="submit">Valider</button>
      </form>
    </>
  );
};

export default FormComponent;
