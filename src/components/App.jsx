import React, { Component } from "react";
import shortid from "shortid";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactForm/ContactLists";



export class App extends Component {

    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          ],
      }

    addTodo = name => {

        const todo = {
            id: shortid.generate(),
            name: name,
            number: '123'
        }

        this.setState(prevState => ({
            contacts: [todo, ...prevState.contacts],

        }))


    }


  render(){

    return (
        <>
            <ContactForm onSubmit={this.addTodo} />
            <ContactList contacts={this.state.contacts} />
        </>
      );
  }
};
