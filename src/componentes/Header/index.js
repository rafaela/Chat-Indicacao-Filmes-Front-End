import React from 'react';
import {Link} from 'react-router-dom'
import "./style.css"

const Header = () => (
  <div className="masthead clearfix">
    <div className="inner">
      <h3 className="masthead-brand">IndicaCine</h3>
      <nav>
        <ul className="nav masthead-nav">
          <li className="active">
            <a href="/">Página inicial</a>
          </li>
          <li className="">
            <Link to={'/sobre'}>Sobre</Link>
          </li>
          <li className="active">
            <div className="chat-show link">Chat</div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;