import React from 'react';

export default class Greeter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h3>Hello {this.props.name} ({this.props.email})</h3>
        )
    }
}