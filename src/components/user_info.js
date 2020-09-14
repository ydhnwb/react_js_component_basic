import React from 'react';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="p-3">
                <h3>Learn more about this person</h3>
                <div>
                    <ul>
                        <li>Name: {this.props.name}</li>
                        <br></br>
                        <li>Age: {this.props.age}</li>
                    </ul>
                </div>
                <div>
                    <p>Hobbies</p>
                    <ul>
                        {
                            this.props.hobbies.map((hobby, index) => {
                                return (
                                    <div>
                                    <li className="list">{hobby}</li>
                                    <br></br>
                                    </div>

                                    
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