import React from 'react'
import facebook from './imagens/icons8-facebook-32.png'
import github from './imagens/icons8-github-50.png'
import gmail from './imagens/icons8-gmail-32.png'
import './style.css'

const Footer = () =>(
    <footer className="contato">
        <p>Contatos</p>
        <div>
            <a href="www.facebook.com">
                <img src={facebook} className="imgContato" alt='fb'></img>
            </a>
            <a href="https://github.com/rafaela">
                <img src={github} className="imgContato"alt='git'></img>
            </a>
            <a href="www.gmail.com">
                <img src={gmail} className="imgContato" alt='gm'></img>
            </a>
        </div> 
        
    </footer>
);

export default Footer;