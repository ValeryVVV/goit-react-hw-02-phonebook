import React, { Component } from "react";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      };

      handleChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({
          [name]: value,
        });
      };

      handleSubmit = e => {
        e.prevetnDefault();


        this.props.onSubmit(this.state);

        this.setState({ name: '', number: '' });
      }

    render() {
        const { name, number } = this.state;
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required

                    />
                    </label>
                <button type="submit">Add contact</button>
            </form>

            </>
        )
    }
}

export default ContactForm;
