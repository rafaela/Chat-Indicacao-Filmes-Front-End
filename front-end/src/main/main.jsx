import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom';

import React from 'react'
import Chat from '../chat/chat'
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';
import Sobre from '../componentes/Sobre/index'
import Genero from '../generos/genero'

import { getMovie } from '../chat/chatActions'
import Filmes from '../filmes';

class Main extends React.Component {

    render() {
        const { cart } = this.props;
        return (
            <div className="site-wrapper-inner">
                <div className="cover-container">
                    <Switch>
                        <Route path="/sobre" component={Sobre} />
                        <Route path="/genero" render={() => <Genero movie={this.props.movie} />} />
                        <Route render={() => <Filmes filmes={this.props.filmes} />} />

                    </Switch>
                    <Footer nome="@rafaela" />
                </div>
                <Chat />
            </div>
        )
    }
}
const mapStateToProps = state => ({ movie: state.chat.movie })
const mapDispatchToProps = dispatch => bindActionCreators({ getMovie }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
