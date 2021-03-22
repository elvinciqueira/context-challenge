import React from 'react'
import './styles.scss'
import {RacaContext} from '../../App'

const RacaSelecionada = () => {
  const {raca} = React.useContext(RacaContext)
  
  return (
    <div className={`raca-selecionada`}>
      <h2 className="raca-selecionada__nome">
        {raca.name}
      </h2>
      <p className="raca-selecionada__info">
        <span className="raca-selecionada__info__descricao">
          Tempo de vida:
        </span>
        {raca.life_span}
      </p>
      <img
        alt="Imagem de raca"
        className="raca-selecionada__imagem"
        src={raca.imagem}
      />
    </div>
  )
}

export default RacaSelecionada