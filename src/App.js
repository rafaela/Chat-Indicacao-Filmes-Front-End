import React from 'react';
import Main from './main/main';
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Chat from './chat/chat'
import "./style.css"

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMessages } from './chat/chatActions'

import { withRouter } from 'react-router-dom';

class App extends React.Component {
  componentWillMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <div className="site-wraper-inner">
        <div className="cover-container">
          <Header />
          <Main filmes={this.props.movies}/>

          <Footer />
        </div>
        <Chat messages={this.props.messages} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ messages: state.chat.messages, movies: state.chat.movie })
const mapDispatchToProps = dispatch => bindActionCreators({ getMessages }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
