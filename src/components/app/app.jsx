import { Component } from 'react';
import Level from '../level/level';
import Tiles from '../tiles/tiles';
import Footer from '../footer/footer';

/**
 * Selector Básico de Recursos.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: 8,
      tiles: Array(24).fill(''),
      hasResource: Array(24).fill(false),
    }
  }

  handleClickTile(i) {
    const tiles = this.state.tiles.slice();
    const hasResource = this.state.hasResource.slice();
    tiles[i] = !this.state.hasResource[i] ? ' is-success' : '';
    hasResource[i] = !this.state.hasResource[i];

    if (!this.state.hasResource[i]) {
      this.setState((state) => {
        if (state.resources > 0) {
          return {
            resources: state.resources - 1,
            tiles: tiles,
            hasResource: hasResource
          }
        }
        if (state.resources === 0) {
          tiles[i] = ' is-danger';
          return {
            tiles: tiles,
          };
        }
      });
    } else {
      this.setState((state) => {
        if (state.resources < 8) {
          return {
            resources: state.resources + 1,
            tiles: tiles,
            hasResource: hasResource
          }
        }
      });
    }
  }

  handleClickReset() {
    this.setState({
      resources: 8,
      tiles: Array(24).fill(''),
      hasResource: Array(24).fill(false),
    });
  }

  render() {
    const resources = this.state.resources;
    const color = this.state.tiles;
    return (
      <div className="section">
        <div className="container">
          <Level
            resources={resources}
            onClick={() => this.handleClickReset()}
          />
          <Tiles
            onClick={(i) => this.handleClickTile(i)}
            color={color}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
