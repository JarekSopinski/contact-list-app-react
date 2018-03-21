import React, { Component } from 'react';

import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <AddContactForm/>
                <ContactList/>
            </React.Fragment>
        )
    };

}

export default App;
