import React from 'react'
import './Apply.scss'

const formDomain = 'https://docs.google.com/forms/'
const formUrl = formDomain + 'd/e/1FAIpQLSccXBwqFccJ-g_n9545FEomK0v8wXI0KNfgqnCgiI0LLtnYHg/viewform?embedded=true'

export const Apply = (props) => (
  <div className='application-form'>
    <iframe src={formUrl}
      width='100%' height='900' frameBorder='0' marginHeight='0' marginWidth='0' scrolling='no'>Loading...</iframe>
  </div>
)

Apply.propTypes = {
  apply       : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Apply
