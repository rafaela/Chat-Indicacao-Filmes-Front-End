import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../service/api'
import {Card, Row, Col, Container} from 'react-bootstrap'
import $ from 'jquery'


import './style.css'

export default class Filmes extends Component{
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this);
    }

    state = {
        filmes: [],
        page: 0,
        loading: false
    }

    loadMovies = async (movies) => {
        if(movies){
            this.setState({filmes: movies})
        }
        else{
            const response = await api.get(`/filmes?limit=5&skip=${this.state.page * 5}`);
            this.setState({filmes: this.state.filmes.concat(response.data)}, () => {
            this.setState({loading: false})
        })
        }
        
    }
    
    componentDidMount() {
        
        window.addEventListener('scroll', this.handleScroll);
        this.loadMovies();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.movies){
            this.loadMovies(nextProps.movies)
        }
    }

    handleScroll(e) {
        let state = this;
        $(window).scroll(function() {
            if(!state.state.loading)
                if($(window).scrollTop() + $(window).height() == $(document).height()) {
                    state.setState({page: state.state.page + 1, loading: true}, () => state.loadMovies())
                }
         });
    }

   
    render(){
        return (
            <Container className='lista-filmes'>
            <Row className="justify-content-md-center">
                {this.state.filmes.map(filme => (
                <Col xs lg="4">
                    <Card key={filme._id} className="card">
                        <Card.Img variant="top" key ={filme}src={filme.imagem} className="imgCard"/>
                        <Card.Body>
                            <Card.Title className="titulo">{filme.titulo}</Card.Title>
                            <Card.Text className="texto">{filme.resumo}</Card.Text>
                            <Card.Text className="info">Diretor: {filme.diretor}</Card.Text>
                            <Card.Text className="info">Gênero: {filme.genero}</Card.Text>
                            <Card.Text className="info">Classificação: {filme.classificacao}</Card.Text>
                            <Card.Text className="info">Duração: {filme.duracao}</Card.Text>
                            <Card.Text className="info">Avaliação: {filme.avaliacao}</Card.Text>

                            
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Container>
        )
    }
}
