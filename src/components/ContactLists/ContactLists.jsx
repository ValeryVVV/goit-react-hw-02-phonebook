import React from "react";

import style from './ContactLists.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.item}>
        <p className={style.contact}>
          {name}...
          {number}
        </p>
        <button className={style.btn} type="submit" onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);


export default ContactList;
