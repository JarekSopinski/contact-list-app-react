import React, { Component } from 'react';

import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";

class App extends Component {

    // INITIAL STATE

    state = {
        contacts: []
    };

    // CUSTOM FUNCTIONS

    addContact = ({ newName, newPhone, newEmail, newCategory }) => {

        const categoriesInBrackets = this.handleCategoriesNames(newCategory);
        // modifies how categories are displayed

        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32), // generate id based on current date
                name: newName,
                phone: newPhone,
                email: newEmail,
                category: categoriesInBrackets
            })
        })
    }; // this function is passed as props /addContact={this.addContact}/ to <AddContactForm/> so that
    // it can work based on states from this component

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



    // RENDERING

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
