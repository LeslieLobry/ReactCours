import { useEffect, useState } from 'react'



const Multiplications = ({targetValue}) => {
     const [nbr1, setNbr1] = useState(0)
      const [nbr2, setNbr2] = useState(0)
      const [resultat, setResultat] = useState('');
    
      useEffect(() => {
        const result =nbr1 * nbr2;
        if (result === targetValue){
            setResultat(`la multiplication des deux nombres fait bien ${targetValue}`)
        }
        else{
            setResultat(`les deux nombres multipliés ne font pas ${targetValue}`)
        }
      }, [nbr1, nbr2, targetValue]);
    
      const handleInput1Change = (event) => {     setNbr1(Number(event.target.value));} 
      const handleInput2Change = (event) => {     setNbr2(Number(event.target.value));}
      return (
        <>
          <input type="number" value={nbr1} onInput={(e) => setNbr1(e.target.value)}onChange={handleInput1Change} placeholder='entrer un premier nombre '/>
          <input type="number" value={nbr2} onInput={(e) => setNbr2(e.target.value)} onChange={handleInput2Change}placeholder='entrer un deuxième nombre'/>
          <p>{nbr1}x{nbr2}=</p>
          <p>{resultat}</p>
        </>
      )
}
 
export default Multiplications;