import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  const [contactList, setContactList] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filter, setFilter] = useState("");

  const addNewContact = (newContact) => {
    setContactList((prev) => {
      return [...prev, newContact];
    });
  };

  const removeContact = (contactId) => {
    setContactList((prev) => prev.filter((item) => item.id !== contactId));
  };

  const contacts = contactList.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactList={contacts} onRemove={removeContact} />
    </div>
  );
};

export default App;
