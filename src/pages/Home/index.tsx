import React from 'react'
import Button from '../../core/components/Button'
import './styles.css'

const Home = () => (
      <div>
            <h2 className="home-title">
                  Desafio do Capítulo 3, Bootcamp DevSuperior
            </h2>
            <p className="home-text">
                  Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/>
                  Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. <br/>
                  Este design foi adaptado a partir de Ant Design System for Figma, de <br/>
                  Mateusz Wierzbicki: <span className="email">antforfigma@gmail.com</span>
            </p>
            <div className="btn">
                  <Button />
            </div>
      </div>
)

export default Home;