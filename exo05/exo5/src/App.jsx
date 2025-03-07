import { useEffect, useState } from 'react';

const Multiplications = ({ targetValue}) => {
  targetValue =  Math.floor(Math.random() * 100) + 1
  const [nbr1, setNbr1] = useState(0);
  const [nbr2, setNbr2] = useState(0);
  const [resultat, setResultat] = useState('');
  const result = nbr1 * nbr2;

  useEffect(() => {
    
    if (result === targetValue) {
      setResultat(`La multiplication des deux nombres fait bien ${targetValue}`);
    } else {
      setResultat(`Les deux nombres multipliés ne font pas ${targetValue}`);
    }
  }, [nbr1, nbr2,result, targetValue]);

const handleInputChange = (setter) => (event) => {
  setter(Number(event.target.value));
};
  return (
    <>
      <input type="number" value={nbr1} onChange={handleInputChange(setNbr1)}placeholder="entrer un premier nombre"/>
      <input type="number"value={nbr2} onChange={handleInputChange(setNbr2)}placeholder="entrer un deuxième nombre"/>
      <p>{nbr1} x {nbr2} = {result}</p>
      <p>{resultat}</p>
    </>
  );
};

export default Multiplications;
