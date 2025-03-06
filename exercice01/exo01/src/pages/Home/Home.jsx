
import TableRow from "../../Components/TableRow/TableRow"
const FirstComponent = () => {
  

    return ( 
        <div>
            <h1 className="title">My Personn</h1>
          
            <table className="table table-dark table-striped ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FirstName</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow/>
                </tbody>
            </table>          
        </div>
     );
}
 
export default FirstComponent;

