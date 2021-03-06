import React, { Component } from 'react';
import { connect } from 'react-redux';

import UpdateContact from "./UpdateContact";

class ContactList extends Component {

    handleRemove = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId);
    };

    render() {
        const { contacts } = this.props;

        return (
            <ul className={"contactList"}>
                {
                    contacts.data.map(contact =>
                        <li key={contact.id}
                            className={"contactItem"}>
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
                            <UpdateContact
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

export default connect(

    state => ({
        contacts: state.contacts
    }),

    dispatch => ({
        removeContact: (contactId) =>
            dispatch({
                type: 'REMOVE_CONTACT',
                contactId
            })
    })

)(ContactList)


