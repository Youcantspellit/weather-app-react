import React, { Component } from 'react';


class Form extends Component {
    state = {}
    render() {
        return (<div><h2>title from form</h2>
            <form onSubmit={this.props.submitGetWeatherNameProps}>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>
            </form></div>);
    }
}

export default Form;



