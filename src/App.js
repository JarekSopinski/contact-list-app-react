import React, { Component } from 'react';

import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";

class App extends Component {

    // CUSTOM FUNCTIONS

    // addContact = ({ newName, newPhone, newEmail, newCategory }) => {
    //
    //     const categoriesInBrackets = this.handleCategoriesNames(newCategory);
    //     // modifies how categories are displayed
    //
    //     this.setState({
    //         contacts: this.state.contacts.concat({
    //             id: Date.now().toString(32), // generate id based on current date, than change it to string
    //             name: newName,
    //             phone: newPhone,
    //             email: newEmail,
    //             category: categoriesInBrackets
    //         })
    //     })
    // };

    updateContact = ( { id, updatedName, updatedPhone, updatedEmail, updatedCategory } ) => {
        // 1st param - new values, 2nd param - an identifier which connects new values to correct contact
        //console.log(updatedName, updatedPhone, updatedEmail, updatedCategory, contactID);

        // as in addContact, categories are modified to be displayed in brackets
        const categoriesInBrackets = this.handleCategoriesNames(updatedCategory);

        // new object with updated values, which will replace old one:
        const updatedContact = {
            id: id,
            name: updatedName,
            phone: updatedPhone,
            email: updatedEmail,
            category: categoriesInBrackets
        };

        // creating an array of new (updated) objects; if ID test passes, old object is replaced with new one (updatedContact)
        const updatedContacts = this.state.contacts.map(contact => contact.id === updatedContact.id ?
            updatedContact
            :
            contact
        );

        //console.log(updatedContacts);

        // state is changed to display updated array
        this.setState({
            contacts: updatedContacts
        })
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
    // used as a callback inside addContact and updateContact



    // RENDERING

    render() {
        return (
            <React.Fragment>
                <AddContactForm/>
                <ContactList
                    removeContact={this.removeContact}
                    updateContact={this.updateContact}
                />
            </React.Fragment>
        )
    };

}

export default App;
