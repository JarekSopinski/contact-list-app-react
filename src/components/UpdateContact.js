import React, { Component } from 'react';

class UpdateContact extends Component {

    render() {

        return (
            <React.Fragment>
                <form>

                    <span>Change name:&nbsp;</span>
                    <input/>
                    <br/>

                    <span>Change phone:&nbsp;</span>
                    <input/>
                    <br/>

                    <span>Change e-mail:&nbsp;</span>
                    <input/>
                    <br/>

                    <span>Change categories:&nbsp;</span>
                    <input/>
                    <br/>

                    <button>Submit changes</button>
                </form>
            </React.Fragment>
        );

    }

}

export default UpdateContact