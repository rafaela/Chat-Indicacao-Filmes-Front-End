import React from 'react';
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
            <a href="#sobre">Sobre</a>
          </li>
          
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;