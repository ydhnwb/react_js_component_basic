import React from 'react';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h5>Learn more about this person</h5>
                <div>
                    <ul>
                        <li>Name: {this.props.name}</li>
                        <li>Age: {this.props.age}</li>
                    </ul>
                </div>
                <div>
                    <p>Hobbies</p>
                    <ul>
                        {
                            this.props.hobbies.map((hobby, index) => {
                                return (
                                    <li>{hobby}</li>
                                );
                            })
                        }
                    </ul>
                    {
                        this.props.age > 17 ? <h5>Good luck for your test!</h5> : <h5>You mest be 17!</h5>
                    }

                </div>

            </div>

        )
    }
}