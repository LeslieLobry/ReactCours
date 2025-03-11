import { useState } from "react";
import {Outlet, Link} from 'react-router-dom'
const NavBar = () => {
  const [contactList, setContactList] = useState([
    {id:1,firstname: "toto", lastname:"tata", email:"toto@gmail.com", phone:"+21654379"}
  ]);
  return (
    <>
      <nav>
       
       <div>
        <Link to={"/"}>contactList</Link>
       </div>
       <div>
        <Link to={"/add"}>Add Contact</Link>
       </div>
      </nav>
      <div className="main">
        <Outlet context={[contactList, setContactList]}/>
      </div>
    </>
  );
}

export default NavBar;