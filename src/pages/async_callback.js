import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

export const AsyncEtc = () => {
    let styles = {
        marginTop: 76,
        marginLeft: 38,
        marginRight: 38,
        marginBottom: 38
    };
    return (
        <div className="row" style={styles}>
            <div className="col-md-12">
                <h3>callback.js</h3>
                <ReactEmbedGist gist="ydhnwb/2a69b9eb7fe8a58d274a9908c76e285f" />
            </div>

            <div className="col-md-12">
                <h3>index.js</h3>
                <ReactEmbedGist gist="ydhnwb/aa792947ffe798c9eaf4bc2b70c4194e" />
            </div>

            <div className="col-md-12">
                <h3>promise.js</h3>
                <ReactEmbedGist gist="ydhnwb/1065f66ebec27ec967f52879ca6f724d"/>
            </div>

            <div className="col-md-12">
                <h3>index2.js</h3>
                <ReactEmbedGist gist="ydhnwb/74878b8e9c3274504b19efbfd79d5683"/>
            </div>

            <div className="col-md-12">
                <h3>request_excercise.js</h3>
                <ReactEmbedGist gist="ydhnwb/5dac26cf29d93ce842cede1c11b88612"/>
            </div>

        </div>
    )
}