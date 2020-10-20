import React from 'react'
import Button from '../../core/components/Button'
import './styles.css'
import TempImage from './temporary.png'

const Search = () => (
   <div className="search-container">
      <div className="search-box">
         <h2 className="search-box-title">Encontre um perfil Github</h2>
         <form>
            <input type="text" className="search-box-input" />
            <div className="btn-search">
               <Button text="Encontrar" />
            </div>
         </form>
      </div>

      <div className="result-container">
         <div className="user-data-container">
            <img src={TempImage} alt="" className="user-avatar" />
            <div className="user-data">
               <div className="user-stats">
                  <span>Repertorios Publicos:</span>
                  <span>Seguidores:</span>
                  <span>Seguindo:</span>
               </div>
               <div className="user-info">
                  <h3 className="user-info-title">Informações</h3>
                  <div>Empresa:</div>
                  <div>Website/Blog:</div>
                  <div>Localidade:</div>
                  <div>Membro desde:</div>
               </div>
            </div>
         </div>
         <div className="btn-see-profile">
            <Button text="Ver Perfil" />
         </div>
      </div>
   </div>
)

export default Search