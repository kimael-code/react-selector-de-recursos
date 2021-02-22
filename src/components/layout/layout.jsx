import Level from '../level/level';
import Tile from '../tiles/tiles';
import Footer from '../footer/footer';

/**
 * Mi maquetado con Bulma.
 * @param {Object} props Propiedades pasadas desde arriba.
 */
const Layout = (props) => {
  return (
    <div className="section">
      <div className="container">
        <Level />
        <Tile />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
