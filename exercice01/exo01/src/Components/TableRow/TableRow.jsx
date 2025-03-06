const TableRow = () => {
    let id =[1,2,3,4]
    let firstName = ["Albert", "Maria", "Chloé", "Sylvia"]
    let lastName = ["Dupont", "Dupont", "Dupont", "Martez"]
    return ( 
        <>
          
   
        <tr>
            <td>{id.map((id, index)=> <p key={index}>{id}</p>)}</td>
            <td>{firstName.map((prenom, index)=> <p key={index}>{prenom}</p>)}</td>
            <td> {lastName.map((nom, index)=> <p key={index}>{nom}</p>)}</td>
        </tr>
        </>
     );
}
 
export default TableRow