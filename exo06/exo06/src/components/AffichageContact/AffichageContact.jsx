


const AffichageContact = ({ contacts }) => {
    if (contacts.length === 0) {
        return <p> Aucun contact n'a été ajouté </p>
    }

    return (
        <div className="container mt-5">
        <table className="table">
          <thead>
            <tr className="bg-success">
              <th className="bg-success-subtle">Prénom</th>
              <th className="bg-danger">Nom</th>
              <th className="bg-warning-subtle">Email</th>
              <th className="bg-success">Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}className="bg-success">
                <td>{contact.prenom}</td>
                <td>{contact.nom}</td>
                <td>{contact.email}</td>
                <td>{contact.telephone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    );
}

export default AffichageContact;