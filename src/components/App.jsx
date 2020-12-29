import React from 'react';

import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import SendMessage from './SendMessage.jsx'


export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text: 'Some text from state',
            timeout: null,
            messages: [],
            interval: null,
        };
    }

    componentDidUpdate(){
        if(this.state.messages.length %2 > 0){
            this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
            }
    };

    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        this.setState({timeout: null});
    };

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
    };

    render() {
        return <main>
            <MessageList messages={this.state.messages}/>
            <SendMessage send={this.send}/>
        </main>;
    };
    
}