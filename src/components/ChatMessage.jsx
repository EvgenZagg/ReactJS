import React from 'react';
import ChatList from './ChatList.jsx';
import App from './App.jsx'

export default class ChatMessage extends React.Component {

    render() {

        return <div style={{
            display:'flex',
            height: '749px'
        }}>
            <ChatList/>
            <App/>
        </div>

    }

}