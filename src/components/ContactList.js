import React, { Component } from 'react';

class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {name: 'Luke Skywalker', phone: '111-111-111', email: 'luke@gmail.com', category: 'family'},
                {name: 'Darth Vader', phone: '222-222-222', email: 'vader@gmail.com', category: 'family'},
                {name: 'Leia Organa', phone: '333-333-333', email: 'leia@gmail.com', category: 'family'},
                {name: 'Han Solo', phone: '444-444-444', email: 'han@gmail.com', category: 'job'},
                {name: 'Lando Carlissian', phone: '555-555-555', email: 'lando@gmail.com', category: 'job'},
                {name: 'Obi-wan Kenobi', phone: '777-777-777', email: 'kenobi@gmail.com', category: 'job'}
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.contacts.map((contact, id) =>
                            <li key={id}>
                                <strong>{contact.name}</strong>
                                <br></br>
                                {contact.phone}
                                <span>,&nbsp;</span>
                                {contact.email}
                                <br></br>
                                {contact.category}
                            </li>
                        )
                    }
                </ul>
            </React.Fragment>
        )
    }

}

export default ContactList