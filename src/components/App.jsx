import React, { Component } from "react";
import shortid from "shortid";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactForm/ContactLists";


class App extends Component {

    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
      }

      deteleContact = (contactId) => {

        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }))

      }

    addTodo = ({ name, number }) => {

        const todo = {
            id: shortid.generate(),
            name: name,
            number: number
        }

        console.log(todo)

        this.setState(prevState => ({
            contacts: [todo, ...prevState.contacts]
        }))

    }


  render(){

    return (
        <>
        <p>1223</p>
            <ContactForm onSubmit={this.addTodo} />
            <ContactList contacts={this.state.contacts} onDeleteContact={this.deteleContact}/>
        </>
      );
  }
};

export default App;
