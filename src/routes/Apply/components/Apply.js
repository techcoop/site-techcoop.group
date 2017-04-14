import React from 'react'
import ReactDOM from 'react-dom'
import './Apply.scss'

const formDomain = 'https://docs.google.com/forms/'
const formUrl = formDomain + 'd/e/1FAIpQLSccXBwqFccJ-g_n9545FEomK0v8wXI0KNfgqnCgiI0LLtnYHg/viewform?embedded=true'

export class Apply extends React.Component {
  constructor (props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions () {
    var $this = ReactDOM.findDOMNode(this)
    $this.height = window.document.documentElement.clientHeight - 70
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    return (
      <iframe src={formUrl}
        width='100%' frameBorder='0' marginHeight='0' marginWidth='0'>Loading...</iframe>
    )
  }
}

Apply.propTypes = {
  apply       : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Apply
