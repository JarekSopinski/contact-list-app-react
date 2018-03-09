import React, { Component } from 'react';

const initialState = {
    updatedName: '',
    updatedPhone: '',
    updatedEmail: '',
    updatedCategory: '',
};

class UpdateContact extends Component {

    state = initialState;
    contactID = this.props.contactID;

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    }; // pass new values to this component's state

    handleSubmit = event => {
        event.preventDefault(); // prevent reloading after submitting
        //console.log(this.state) // see submitted values
        this.props.updateContact(this.state, this.contactID);
        // we add ID of parent contact (2nd parameter) as an identifier
        this.setState(initialState);
        //console.log(this.state);
        //console.log(this.contactID)
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