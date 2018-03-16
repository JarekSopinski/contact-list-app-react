import React, { Component } from 'react';

const initialState = {
    updatedName: '',
    updatedPhone: '',
    updatedEmail: '',
    updatedCategory: '',
};

class UpdateContact extends Component {

    state = initialState;
    currentContact = this.props.currentContact;

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedContact = {};
        updatedContact[name] = value;

        this.setState(updatedContact)
    };

    handleSubmit = event => {
        event.preventDefault(); // prevent reloading after submitting

        const updatedContact = this.state;
        updatedContact.id = this.currentContact.id;

        console.log(updatedContact);

        // If user left some inputs empty updatedContact will keep old values:
        if (!updatedContact.updatedName) {updatedContact.updatedName = this.props.currentContact.name}
        if (!updatedContact.updatedPhone) {updatedContact.updatedPhone = this.props.currentContact.phone}
        if (!updatedContact.updatedEmail) {updatedContact.updatedEmail = this.props.currentContact.email}
        if (!updatedContact.updatedCategory) {updatedContact.updatedCategory = this.props.currentContact.category}

        this.props.updateContact(updatedContact);
        this.setState(initialState);

    };

    render() {

        const { updatedName, updatedPhone, updatedEmail, updatedCategory } = this.state;

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>

                    <span>Change name:&nbsp;</span>
                    <input
                        name="updatedName"
                        value={updatedName}
                        onChange={this.handleChange}/>
                    <br/>

                    <span>Change phone:&nbsp;</span>
                    <input
                        name="updatedPhone"
                        value={updatedPhone}
                        onChange={this.handleChange}/>
                    <br/>

                    <span>Change e-mail:&nbsp;</span>
                    <input
                        name="updatedEmail"
                        value={updatedEmail}
                        onChange={this.handleChange}/>
                    <br/>

                    <span>Change categories:&nbsp;</span>
                    <input
                        name="updatedCategory"
                        value={updatedCategory}
                        onChange={this.handleChange}/>
                    <br/>

                    <button>Submit changes</button>
                </form>
            </React.Fragment>
        );

    }

}

export default UpdateContact