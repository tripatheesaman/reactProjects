import { useState } from "react";
import ContactAdder from "./ContactAdder";
import ContactList from "./ContactList";
const Main = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);
  const addContacts = (additionalContacts) => {
    let allContacts = [...contacts, additionalContacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const deleteHandler = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <main className="main">
        <section className="main__section">
          <h2 className="main__h2">Contact Adder:</h2>
          <ContactAdder addContacts={addContacts} />
        </section>
        <section className="main__section">
          <h2 className="main__h2">Contact List:</h2>

          {contacts.map((data) => (
            <ContactList key={data.id} data={data} />
          ))}
        </section>
      </main>
      <footer className="footer">
        <button className="footer__button" onClick={deleteHandler}>
          Clear All Contacts
        </button>
      </footer>
    </>
  );
};
export default Main;
