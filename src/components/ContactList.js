import React, { Component } from 'react';

import UpdateContact from "./UpdateContact";

class ContactList extends Component {

    contactItemStyle = {
      display: 'inline-block',
        margin: '10px',
        padding: '10px',
        backgroundColor: 'yellow',
        border: '2px solid red'
    };

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
                            <li key={contact.id}
                            style={this.contactItemStyle}>
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
                                    onClick={ this.handleRemove }>
                                    Remove
                                </button>
                                <br/>
                                &nbsp;
                                <UpdateContact/>
                            </li>
                        )
                    }
                </ul>
        );

    }

}

export default ContactList

