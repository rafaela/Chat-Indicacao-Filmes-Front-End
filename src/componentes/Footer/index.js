import React from 'react'
import facebook from './imagens/icons8-facebook-32.png'
import github from './imagens/icons8-github-50.png'
import gmail from './imagens/icons8-gmail-32.png'
import {Card} from 'react-bootstrap'
import './style.css'

const Footer = () =>(

    <Card className="text-center footer">
        
        <Card.Body className="body">
            <Card.Header className="header">Contatos</Card.Header>
            <Card.Link href="www.facebook.com">
                <Card.Img src={facebook} className="imgContato" alt='fb'/>
            </Card.Link>
            <Card.Link href="https://github.com/rafaela">
                <Card.Img src={github} className="imgContato"alt='git'/>
            </Card.Link>
            <Card.Link href="www.gmail.com">
                <Card.Img src={gmail} className="imgContato" alt='gm'/>
            </Card.Link>
            
            
        </Card.Body>
    </Card>
);

export default Footer;