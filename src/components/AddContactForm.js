import React, { Component } from 'react';

class AddContactForm extends Component {

    state = {
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        contactCategory: '',
    }; // newly submitted values are being kept here

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }; // pass new values to this component's state

    handleSubmit = event => {
        event.preventDefault(); // prevent reloading after submitting
        //console.log(this.state) // see submitted values
    };

    render() {

        const { contactName, contactPhone, contactEmail, contactCategory } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>

                <span>Name:&nbsp;</span>
                <input
                    name="contactName"
                    value={contactName}
                    onChange={this.handleChange}
                />
                <br></br>

                <span>Phone:&nbsp;</span>
                <input
                    name="contactPhone"
                    value={contactPhone}
                    onChange={this.handleChange}/>
                <br></br>

                <span>E-mail:&nbsp;</span>
                <input
                    name="contactEmail"
                    value={contactEmail}
                    onChange={this.handleChange}/>
                <br></br>

                <span>Categories:&nbsp;</span>
                <input
                    name="contactCategory"
                    value={contactCategory}
                    onChange={this.handleChange}/>
                <br></br>

                <button>Add new contact</button>
            </form>
        )
    }

}

export default AddContactForm