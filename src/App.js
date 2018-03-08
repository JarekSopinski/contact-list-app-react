import React, { Component } from 'react';

import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";

class App extends Component {

    // INITIAL STATE

    state = {
        contacts: [
            {id: '1', name: 'Luke Skywalker', phone: '111-111-111', email: 'luke@gmail.com', category: 'family'},
            {id: '2', name: 'Darth Vader', phone: '222-222-222', email: 'vader@gmail.com', category: 'family'},
            {id: '3', name: 'Leia Organa', phone: '333-333-333', email: 'leia@gmail.com', category: 'family'},
            {id: '4', name: 'Han Solo', phone: '444-444-444', email: 'han@gmail.com', category: 'job'},
            {id: '5', name: 'Lando Carlissian', phone: '555-555-555', email: 'lando@gmail.com', category: 'job'},
            {id: '6', name: 'Obi-wan Kenobi', phone: '777-777-777', email: 'kenobi@gmail.com', category: 'job'}
            ] // indexes should be strings, not numbers, otherwise there will be problems with comparing
    };

    // CUSTOM FUNCTIONS

    addContact = ({ newName, newPhone, newEmail, newCategory }) => {

        const categoriesInBrackets = this.handleCategoriesNames(newCategory);
        // modifies how categories are displayed

        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32), // generate id based on current date, than change it to string
                name: newName,
                phone: newPhone,
                email: newEmail,
                category: categoriesInBrackets
            })
        })
    }; // this function is passed as props /addContact={this.addContact}/ to <AddContactForm/> (child) so that
    // it can update contact list based on new data sent from child

    updateContact = ( { updatedName, updatedPhone, updatedEmail, updatedCategory } ) => {
        console.log(updatedName, updatedPhone, updatedEmail, updatedCategory);
    };

    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        })
    };

    handleCategoriesNames = string => {
        const words = string.replace(/,/g,"").trim().split(" ");
        let wordsInBrackets = [];

        words.forEach(word => {
            let wordInBrackets = '[' + word + ']';
            wordsInBrackets = wordsInBrackets.concat(wordInBrackets)
        });

        return wordsInBrackets.join(' ')
    }; // modifies strings form 'category' input (removes commas, adds brackets)
    // used as a callback inside addContact



    // RENDERING

    render() {
        return (
            <React.Fragment>
                <h1>Contact list</h1>
                <AddContactForm addContact={this.addContact}/>
                <ContactList contacts={this.state.contacts}
                             removeContact={this.removeContact}
                             updateContact={this.updateContact}
                />
            </React.Fragment>
        )
    };

}

export default App;
