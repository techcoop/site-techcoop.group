import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import 'material-components-web/dist/material-components-web.min.css'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
