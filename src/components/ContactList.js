import React, { Component } from 'react';

import UpdateContact from "./UpdateContact";

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
                <ul className={"contactList"}>
                    {
                        contacts.map(contact =>
                            <li key={contact.id}
                            className={"contactItem"}>

                                <span><strong>{contact.name}</strong></span>
                                <br/>
                                <span>{contact.phone}</span>
                                <span>,&nbsp;</span>
                                <span>{contact.email}</span>
                                <br/>
                                <span>{contact.category}</span>
                                <br/>
                                <button
                                    data-contact-id={contact.id}
                                    onClick={ this.handleRemove }>
                                    Remove
                                </button>
                                <br/>
                                &nbsp;

                                <UpdateContact
                                updateContact={this.props.updateContact}
                                currentContact = {contact}
                                /*
                                Current contact value needs to be passed to update, so that while updating
                                we can compare IDs and save old values (in case user leaves empty input).
                                */
                                />
                            </li>
                        )
                    }
                </ul>
        );

    }

}

export default ContactList

