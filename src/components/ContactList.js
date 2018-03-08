import React, { Component } from 'react';

class ContactList extends Component {

    handleRemove = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId);
        // removeContact() callback is parent's method, passed inside props,
        // it updates parent's state (contact list) based on data send from child (this component)
    };

    render() {
        const { contacts } = this.props;

        return (
                <ul>
                    {
                        contacts.map(contact =>
                            <li key={contact.id}>
                                <strong>{contact.name}</strong>
                                <br/>
                                {contact.phone}
                                <span>,&nbsp;</span>
                                {contact.email}
                                <br/>
                                {contact.category}
                                <br/>
                                <button
                                    data-contact-id={contact.id}
                                    onClick={ this.handleRemove }>Remove</button>
                            </li>
                        )
                    }
                </ul>
        );

    }

}

export default ContactList

