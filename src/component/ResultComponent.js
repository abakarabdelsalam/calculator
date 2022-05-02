import React, { Component } from 'react';

class ResultComponent extends Component {


    render() {
        const { result } = this.props;
        return (
            <div>
                <p>{result}</p>
            </div>
        );
    }
}


export default ResultComponent;

