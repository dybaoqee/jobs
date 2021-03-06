import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo'

const Header = ({collapsed}) => (
  <div className={collapsed ? 'header collapsed' : 'header'}>
    <div className="header-content">
      <div className="title">
        {!collapsed && <Logo />}
        {collapsed && (
          <a href="/">
            <Logo />
            <h2>Trabalhe na EmCasa</h2>
          </a>
        )}
      </div>
      {!collapsed &&
      <div className="content">
        <h1>Trabalhe na EmCasa</h1>
        <p>Estamos revolucionando o mercado de real estate no Brasil. Temos oportunidades para trabalho remoto ou nas nossas sedes no RJ e SP. Conheça mais:</p>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=1f6a_1orGzM1" target="_blank">O que é a EmCasa?</a></li>
          <li><a href="https://www.youtube.com/watch?v=vv2L-XVde_0&t=485s" target="_blank">EmCasa na IstoÉ dinheiro</a></li>
          <li><a href="https://www.emcasa.com" target="_blank">Visite nosso produto</a></li>
        </ul>
      </div>}
    </div>
  </div>
)


Header.propTypes = {
  collapsed: PropTypes.bool
}

export default Header
