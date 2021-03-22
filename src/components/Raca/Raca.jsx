import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'
import {RacaContext} from '../../App'

const Raca = () => {
  const {raca} = React.useContext(RacaContext)
  const racaFoiSelecionada = Boolean(raca.name)


  return (
    racaFoiSelecionada
    ?
    <RacaSelecionada  />
    :
    <RacaNaoSelecionada />
  )
}

export default Raca