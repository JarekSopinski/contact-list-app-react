import React, { Component } from 'react';

import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";

class App extends Component {

    state = {
        contacts: [
            {id: 'fdg33536', name: 'Luke Skywalker', phone: '111-111-111', email: 'luke@gmail.com', category: 'family'},
            {id: 'ds366466', name: 'Darth Vader', phone: '222-222-222', email: 'vader@gmail.com', category: 'family'},
            {id: '325tggr4', name: 'Leia Organa', phone: '333-333-333', email: 'leia@gmail.com', category: 'family'},
            {id: '35gtdsg4', name: 'Han Solo', phone: '444-444-444', email: 'han@gmail.com', category: 'job'},
            {id: '3436g465', name: 'Lando Carlissian', phone: '555-555-555', email: 'lando@gmail.com', category: 'job'},
            {id: '335gd44f', name: 'Obi-wan Kenobi', phone: '777-777-777', email: 'kenobi@gmail.com', category: 'job'}
        ]
    };

    addContact = ({ newName, newPhone, newEmail, newCategory }) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32), // generate id based on current date
                name: newName,
                phone: newPhone,
                email: newEmail,
                category: newCategory
            })
        })
    }; // this function is passed as props /addContact={this.addContact}/ to <AddContactForm/> so that
    // it can work based on states from this component

    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        })
    };

    render() {
        return (
            <React.Fragment>
                <h1>Contact list</h1>
                <AddContactForm addContact={this.addContact}/>
                <ContactList contacts={this.state.contacts} removeContact={this.removeContact}/>
            </React.Fragment>
        )
    };

}

export default App;
