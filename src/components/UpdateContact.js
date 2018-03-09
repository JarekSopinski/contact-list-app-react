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

        const submitBtn = document.getElementById('submitBtn');
        const inputName = document.getElementById('inputName');
        const inputPhone = document.getElementById('inputPhone');
        const inputEmail = document.getElementById('inputEmail');
        const inputCategory = document.getElementById('inputCategory');

        //Checking if user has filled all inputs (if their values return true).
        //If every input has been filled, user can click submit button.
        inputName.value && inputPhone.value && inputEmail.value && inputCategory.value ?
            submitBtn.disabled = false : submitBtn.disabled = true;

        //Passing values from input to component's state:
        updatedContact[name] = value;
        this.setState(updatedContact)
    };

    handleSubmit = event => {
        event.preventDefault(); // prevent reloading after submitting

        const updatedContact = this.state;
        updatedContact.id = this.currentContact.id;

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
                        id="inputName"
                        onChange={this.handleChange}/>
                    <br/>

                    <span>Change phone:&nbsp;</span>
                    <input
                        name="updatedPhone"
                        value={updatedPhone}
                        id="inputPhone"
                        onChange={this.handleChange}/>
                    <br/>

                    <span>Change e-mail:&nbsp;</span>
                    <input
                        name="updatedEmail"
                        value={updatedEmail}
                        id="inputEmail"
                        onChange={this.handleChange}/>
                    <br/>

                    <span>Change categories:&nbsp;</span>
                    <input
                        name="updatedCategory"
                        value={updatedCategory}
                        id="inputCategory"
                        onChange={this.handleChange}/>
                    <br/>

                    <button
                        id="submitBtn"
                        disabled={true}
                    >Submit changes</button>
                </form>
            </React.Fragment>
        );

    }

}

export default UpdateContact