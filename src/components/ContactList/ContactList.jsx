import React from "react";
import Contact from "../Contact/Contact";
import s from './ContactList.module.css'

const ContactList = ({ contactList, onRemove }) => {
  return (
    <div>
      <ul>
        {contactList.map((item) => (
          <li className={s.li} key={item.id}>
            <Contact item={item} onRemove={onRemove}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
