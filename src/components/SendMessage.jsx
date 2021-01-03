import React from 'react';
import PropTypes from 'prop-types';

import { TextField} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

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

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { 
            this.send(message)
        }
    };

    render() {

        return <div>
             <TextField 
                      value={this.state.message}
                      onChange={this.handleChange}
                      onKeyUp={ (event) => this.handleKeyUp(event, '')}
                      fullWidth={true}
                      multiline={true} 
                      />
            <button onClick={this.send}>
            <SendIcon />
                </button>
        </div>

    }
}