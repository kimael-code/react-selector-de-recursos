import { Component } from 'react';

/**
 * Mi componente Level de Bulma.
 */
class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: 8
    }
  }

  render() {
    return (
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>{this.state.resources}</strong> Recursos Disponibles
              </p>
          </div>
        </div>

        <div className="level-right">
          <p className="level-item">
            <a className="button is-success">Reiniciar</a>
          </p>
        </div>
      </nav>
    )
  }
}

export default Level;
