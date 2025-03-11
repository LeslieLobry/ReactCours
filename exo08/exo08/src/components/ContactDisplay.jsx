import { useOutletContext , Link} from "react-router-dom";


const ContactDisplay = ({ contactId }) => {
    const [contactList] = useOutletContext();
    const contact = contactList.find(contact => contact.id === parseInt(contactId));
    console.log(contact);
    
    return (
        <>
            <h3>{contact.firstname} {contact.lastname}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <Link to={`/delete/${contact.Id}?mode=delete`}>Delete</Link>
            <Link to={`/edit/${contact.Id}?mode=edit`}>Edit</Link>

        </>
    );
}

export default ContactDisplay;

//sert à récupérer les contact de la liste et afficher le contact qui correspond à l'id