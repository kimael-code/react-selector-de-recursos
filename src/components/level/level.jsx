import { Component } from 'react';

/**
 * Mi componente Level de Bulma.
 */
const Level = (props) => {
  return (
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <p className="subtitle is-5">
            <strong>{props.resources}</strong> Recursos Disponibles
          </p>
        </div>
      </div>

      <div className="level-right">
        <p className="level-item">
          <a
            className="button is-primary"
            onClick={props.onClick}
          >Reiniciar</a>
        </p>
      </div>
    </nav>
  )
}

export default Level;
