import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

export default class OOP extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{
                marginTop: 76,
                marginLeft: 38,
                marginRight: 38,
                marginBottom: 38
            }}>
                <h1>This is about OOP in JS</h1>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Animal.js</h3>
                        <ReactEmbedGist gist="ydhnwb/baa0aeba303ce124de9bba7ec1f6262d" />
                    </div>
                    <div className="col-md-12">
                        <h3>clock.js</h3>
                        <ReactEmbedGist gist="ydhnwb/ee8b726fb8644459ded20ac6bb00caf5" />
                    </div>
                    <div className="col-md-12">
                        <h3>student.js</h3>
                        <ReactEmbedGist gist="ydhnwb/6be371e61a2af43e7ad43f6b453da4fd" />
                    </div>

                </div>

            </div>
        )
    }
}