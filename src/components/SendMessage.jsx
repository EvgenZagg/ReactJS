import React from 'react';
import PropTypes from 'prop-types';

export default class SendMessage extends React.Component {
    state = {
        message: ''
    };

    static propTypes = {
        send: PropTypes.func.isRequired
    };
 
    send = () => {
        this.props.send({message: this.state.message, author:'me'});
        this.setState({message: ''});
    };

    handleChange = event => this.setState({message: event.target.value});

    render() {
        return <div>
            <textarea value={this.state.message} 
                      onChange={this.handleChange}></textarea>
            <button onClick={this.send}>Send</button>
        </div>

    }
}