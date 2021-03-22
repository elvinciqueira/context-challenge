import React from 'react'
import './styles.scss'

import {RacaContext} from '../../App'

const ListaRacas = () => {
  const {selecionaRaca, racas} = React.useContext(RacaContext)
  
  return (
    <ul className="lista-racas">
      {
        racas.map(({id, name}) => (
          <li
            className="lista-racas__item"
            key={id}
            onClick={() => selecionaRaca(name)}
          >
            {name}
          </li>
        ))
      }
    </ul>
  )
}

export default ListaRacas