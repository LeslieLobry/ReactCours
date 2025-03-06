import { useState } from "react";


const FizzBuzz = () => {
     const [count, setCount] = useState(0)
     
     const affichage = (count) => {
        if (count % 15 === 0) return 'FizzBuzz';
        if (count % 3 === 0) return 'Fizz';
        if (count % 5 === 0) return 'Buzz';
        return count;
     }
    return ( 
        <div>
            <div>{count}</div>
           
             <button onClick={() => setCount((count) => count + 1)}>
             Incrémentation 
        </button>
        
        <button onClick={() => setCount((count) => count - 1)}disabled={count < 1}>
             décrémentation 
        </button> 
        <span>{affichage(count)}</span>
        </div>
     );
}
export default FizzBuzz
