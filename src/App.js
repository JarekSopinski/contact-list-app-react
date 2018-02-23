import React, { Component } from 'react';
import AddContactForm from "./components/AddContactForm";

class App extends Component {

    state = {
        contacts: [
            {name: 'Luke Skywalker', phone: '111-111-111', email: 'luke@gmail.com', category: 'family'},
            {name: 'Darth Vader', phone: '222-222-222', email: 'vader@gmail.com', category: 'family'},
            {name: 'Leia Organa', phone: '333-333-333', email: 'leia@gmail.com', category: 'family'},
            {name: 'Han Solo', phone: '444-444-444', email: 'han@gmail.com', category: 'job'},
            {name: 'Lando Carlissian', phone: '555-555-555', email: 'lando@gmail.com', category: 'job'},
            {name: 'Obi-wan Kenobi', phone: '777-777-777', email: 'kenobi@gmail.com', category: 'job'}
        ]
    };

    render() {
        return (
            <React.Fragment>
                <h1>Contact list</h1>
                <AddContactForm/>
            </React.Fragment>
        )
    };

}

export default App;
