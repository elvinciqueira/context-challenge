import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'
import {RacaContext} from '../../App'

const Raca = props => {
  const racaFoiSelecionada = Boolean(props.raca.name)
  const context = React.useContext(RacaContext)

  console.log('context dentro de Raca', context)

  return (
    racaFoiSelecionada
    ?
    <RacaSelecionada {...props} />
    :
    <RacaNaoSelecionada />
  )
}

export default Raca