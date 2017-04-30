import React from 'react'
import { browserHistory, Link } from 'react-router'
import { Button, Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle } from 'react-mdc-web'
import './Header.scss'
import LogoImage from './logo.png'

// TODO make better solution for handling the link on the title, IndexLink messes with styling
const titleClick = () => {
  browserHistory.push('/')
}

export const Header = () => (
  <Toolbar fixed>
    <ToolbarRow>
      <ToolbarSection align='start'>
        <ToolbarTitle onClick={titleClick} style={{ cursor: 'pointer' }}>
          <img src={LogoImage} className='logo-image' />
        </ToolbarTitle>
      </ToolbarSection>
      <ToolbarSection align='end'>
        <Link to='/apply' className='button-text'>
          <Button primary compact className='mdc-theme--text-primary-on-primary'>
            Apply
          </Button>
        </Link>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
)

export default Header
