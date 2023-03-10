import React, { Component } from "react";
import shortid from "shortid";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactLists/ContactLists";
import Filter from "./Filter/Filter";

import style from './App.module.css';


class App extends Component {

    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
      }

    deteleContact = (contactId) => {

        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }))

      }

    addContact = ({ name, number }) => {
        const { contacts } = this.state;

        
        const newContact = {
            id: shortid.generate(),
            name: name,
            number: number
        }

        const checkedName = contacts.find(contact => 
            contact.name.toLowerCase() === newContact.name.toLowerCase(),
            );

            if(checkedName) {
                alert(`${newContact.name} is already in contact.`)
                return;
            }

        console.log(newContact);

        this.setState(prevState => ({
            contacts: [newContact, ...prevState.contacts]
        }))

    }

    changeFilter = e => {
        this.setState({filter: e.currentTarget.value})
    }

    getFilterContact = () => {
        const { contacts, filter } = this.state;

        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(normalizedFilter),
            );
    }

  render(){
    const { filter } = this.state;

    const filteredContacts = this.getFilterContact();

    return (
        <div className={style.container}>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.addContact} />

            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList contacts={filteredContacts} onDeleteContact={this.deteleContact} />
        </div>
      );
  }
};

export default App;
