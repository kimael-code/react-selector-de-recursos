/**
 * Mi componente Tile hijo de Bulma.
 * @param {Object} props Propiedades pasadas desde arriba.
 */
const TileChild = (props) => {
  return (
    <div
      className={`tile is-child box is-clickable notification${props.color[props.i]} p-4`}
      onClick={props.onClick}
    >
      <div className="content has-text-weight-medium is-size-7">
        <p>{props.pContent}</p>
      </div>
    </div>
  );
}

export default TileChild;
