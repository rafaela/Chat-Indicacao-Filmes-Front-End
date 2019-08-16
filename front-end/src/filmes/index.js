import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../service/api'
import {Card} from 'react-bootstrap'


import './style.css'

export default class Filmes extends Component{
    state = {
        filmes: []
    }

    componentDidMount(){
        this.loadMovies();
    }

    loadMovies = async () => {
        if(this.props.filmes.length > 0){
            this.setState({filmes: this.props.filmes})
        }
        else{
            const response = await api.get('/filmes');
            this.setState({filmes: response.data})
        }
    }

    render(){
        return (
            <div className='lista-filmes'>
                {this.state.filmes.map(filme => (
                    <Card style={{ width: '25rem' }} key={filme._id} className="card">
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
                ))}
            </div>
        )
    }
}
