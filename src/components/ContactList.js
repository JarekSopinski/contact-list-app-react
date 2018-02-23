import React, { Component } from 'react';

class ContactList extends Component {

    render() {
        const { contacts } = this.props
        return <ul>{contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}</ul>
    }

}

export default ContactList