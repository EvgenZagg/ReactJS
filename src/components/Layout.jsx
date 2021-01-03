import React from 'react';

import App from './App.jsx';
import Header from './Header.jsx';
import ChatMessage from './ChatMessage.jsx';

export default class Layout extends React.Component {

render() {
    return <div style={ {
                        width: '100%',
                         backgroundColor: '#DEB887',
                         height: '850px'
                         } }>
            <Header/>
            <ChatMessage/>
         </div>
            }

}