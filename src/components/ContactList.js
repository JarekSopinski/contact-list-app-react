import React, { Component } from 'react';

class ContactList extends Component {

    render() {
        const { contacts } = this.props;
        return (
                <ul>
                    {
                        contacts.map((contact, id) =>
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
        )
    }

}

export default ContactList