


const AffichageContact = ({ contacts }) => {
    if (contacts.length === 0) {
        return <p> Aucun contact n'a été ajouté </p>
    }

    return (
        <div className="container mt-5">
        <table className="table table-dark">
          <thead>
            <tr className="table table-dark">
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
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