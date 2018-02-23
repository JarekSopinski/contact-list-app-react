import React, { Component } from 'react';

class ContactList extends Component {

    render() {
        const { contacts, removeContact } = this.props;

        return (
                <ul>
                    {
                        contacts.map((contact, id) =>
                            <li key={id}>
                                <strong>{contact.name}</strong>
                                <br/>
                                {contact.phone}
                                <span>,&nbsp;</span>
                                {contact.email}
                                <br/>
                                {contact.category}
                                <br/>
                                <button onClick={ () => removeContact(contact.id) }>Remove</button>
                            </li>
                        )
                    }
                </ul>
        );

    }

}

export default ContactList

