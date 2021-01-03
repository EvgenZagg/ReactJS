import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import SendMessage from './SendMessage.jsx'

import '../style/App.css'

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
        if(this.state.messages[this.state.messages.length - 1].author === 'me'){
            const timeout = setTimeout(
                () => {
                    this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
                    this.setState({timeout});
                },
                2000
            );
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
        return <MuiThemeProvider>
        <main className={'main'}>
            <MessageList messages={this.state.messages}/>
            <SendMessage send={this.send}/>
        </main>
        </MuiThemeProvider>
    };
    
}