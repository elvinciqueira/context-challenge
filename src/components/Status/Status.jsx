import React from 'react'
import './styles.scss'
import {RacaContext} from '../../App'

const Status = () => {
  const { status } = React.useContext(RacaContext)
  
  return (
    <p className="status">{status}</p>
  )
}

export default Status