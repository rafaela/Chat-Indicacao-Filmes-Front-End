import React, { Component } from 'react'

import $ from 'jquery';

class ChatList extends Component {

    renderMessages() {
        const list = this.props.messages || [];

        if (list.length > 0) {
            return list.map((item, index) => (
                <li key={index} className={`message ${item.base} appeared`}>
                    <div className="avatar"></div>
                    <div className="text_wrapper">
                        <div className="text">{item.message}</div>
                    </div>
                </li>
            ))
        }
        else {
            return (
                <li>

                </li>
            )
        }

    }

    render() {
        const messages = this.renderMessages()
        return (
            <ul className="messages">
                {messages}
            </ul>
        )
    }

    componentDidUpdate() {
        $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);
    }
}

export default ChatList;