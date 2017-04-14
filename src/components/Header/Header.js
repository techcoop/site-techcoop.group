import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import LogoImage from './logo.png'

export const Header = () => (
  <header className='mdc-toolbar mdc-toolbar--fixed' style={{ height: '65px', paddingTop: '15px' }}>
    <div className='mdc-toolbar__row'>
      <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
        <IndexLink to='/' activeClassName='route--active'>
          <img src={LogoImage} />
        </IndexLink>
      </section>

      <section className='mdc-toolbar__section mdc-toolbar__section--align-end' role='toolbar'>
        <Link to='/apply' activeClassName='route--active'>
          <button className='mdc-button mdc-button--compact' style={{ color: '#e5e5e5' }}>
            Apply
          </button>
        </Link>
      </section>
    </div>
  </header>
)

export default Header
