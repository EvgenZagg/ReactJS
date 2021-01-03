import React from 'react';
import PropTypes from 'prop-types';

import '../style/Message.css'

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    };

    render() {
        return <div className={'message'} style={ {alignSelf: this.props.author === 'robot'?'flex-start':'flex-end' } }>
            <div>{this.props.message}</div>
            <div className={'author'}>{this.props.author}</div>
                </div>;
    }
}