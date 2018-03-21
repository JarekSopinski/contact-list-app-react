import React, { Component } from 'react';
import { connect } from 'react-redux'

const initialState = {
    newName: '',
    newPhone: '',
    newEmail: '',
    newCategory: '',
}; // used to revert to clear state and clear inputs after submitting

class AddContactForm extends Component {

    state = initialState;

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }; // pass new values to this component's state

    /*
    Above function can also be written like this (longer, but easier to understand):
    handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    const patch = {}
    patch[name] = value
    this.setState(patch)
  }
     */

    handleSubmit = event => {
        event.preventDefault(); // prevent reloading after submitting
        //console.log(this.state); // see submitted values
        this.props.addContact(this.state);
        this.setState(initialState) // state and inputs are returned to initial (cleared)
    };

    render() {

        const { newName, newPhone, newEmail, newCategory } = this.state;

        return (
            <div id={"AddContactForm"}>
                <form onSubmit={this.handleSubmit}>

                    <span>Name:&nbsp;</span>
                    <input
                        name="newName"
                        value={newName}
                        onChange={this.handleChange}
                    />
                    <br/>

                    <span>Phone:&nbsp;</span>
                    <input
                        name="newPhone"
                        value={newPhone}
                        onChange={this.handleChange}/>
                    <br/>

                    <span>E-mail:&nbsp;</span>
                    <input
                        name="newEmail"
                        value={newEmail}
                        onChange={this.handleChange}/>
                    <br/>

                    <span>Categories:&nbsp;</span>
                    <input
                        name="newCategory"
                        value={newCategory}
                        onChange={this.handleChange}/>
                    <br/>

                    <button>Add new contact</button>
                </form>
            </div>
        )
    };



}

export default connect(

    state => ({
        contacts: state.contacts
    }),

    dispatch => ({
        addContact: ({ newName, newPhone, newEmail, newCategory }) =>
            dispatch({
                type: 'ADD_CONTACT',
                newName,
                newPhone,
                newEmail,
                newCategory
            })
    })
)(AddContactForm)

