import TileChild from "./tile-child";

/**
 * Mi componente Tiles de Bulma.
 * @param {Object} props Propiedes pasadas desde arriba.
 */
const Tiles = (props) => {
  let myTime = new Date();

  const getLocaleTimeString = (time) => {
    myTime.setHours(time.h, time.m, time.s);

    if (time.add > 0) {
      myTime.setMinutes(myTime.getMinutes() + time.add);
    }
    const startTime = myTime.toLocaleTimeString([], { timeStyle: 'short' });
    myTime.setMinutes(myTime.getMinutes() + 30);
    const endTime = myTime.toLocaleTimeString([], { timeStyle: 'short' });

    return `${startTime} - ${endTime}`;
  }

  const renderTileChild = (i, time) => {
    return (
      <TileChild
        onClick={() => props.onClick(i)}
        pContent={getLocaleTimeString(time)}
        color={props.color}
        i={i}
      />
    );
  }

  return (
    <div className="tile is-ancestor">
      <div className="tile is-2 is-vertical is-parent has-text-centered">
        {renderTileChild(0, {h:8, m:0, s:0, add:0})}
        {renderTileChild(1, {h:8, m:0, s:0, add:30})}
        {renderTileChild(2, {h:8, m:0, s:0, add:60})}
        {renderTileChild(3, {h:8, m:0, s:0, add:90})}
      </div>

      <div className="tile is-2 is-vertical is-parent has-text-centered">
        {renderTileChild(4, {h:8, m:0, s:0, add:120})}
        {renderTileChild(5, {h:8, m:0, s:0, add:150})}
        {renderTileChild(6, {h:8, m:0, s:0, add:180})}
        {renderTileChild(7, {h:8, m:0, s:0, add:210})}
      </div>

      <div className="tile is-2 is-vertical is-parent has-text-centered">
        {renderTileChild(8, {h:8, m:0, s:0, add:240})}
        {renderTileChild(9, {h:8, m:0, s:0, add:270})}
        {renderTileChild(10, {h:8, m:0, s:0, add:300})}
        {renderTileChild(11, {h:8, m:0, s:0, add:330})}
      </div>

      <div className="tile is-2 is-vertical is-parent has-text-centered">
        {renderTileChild(12, {h:8, m:0, s:0, add:360})}
        {renderTileChild(13, {h:8, m:0, s:0, add:390})}
        {renderTileChild(14, {h:8, m:0, s:0, add:420})}
        {renderTileChild(15, {h:8, m:0, s:0, add:450})}
      </div>

      <div className="tile is-2 is-vertical is-parent has-text-centered">
        {renderTileChild(16, {h:8, m:0, s:0, add:480})}
        {renderTileChild(17, {h:8, m:0, s:0, add:510})}
        {renderTileChild(18, {h:8, m:0, s:0, add:540})}
        {renderTileChild(19, {h:8, m:0, s:0, add:570})}
      </div>

      <div className="tile is-2 is-vertical is-parent has-text-centered">
        {renderTileChild(20, {h:8, m:0, s:0, add:600})}
        {renderTileChild(21, {h:8, m:0, s:0, add:630})}
        {renderTileChild(22, {h:8, m:0, s:0, add:660})}
        {renderTileChild(23, {h:8, m:0, s:0, add:690})}
      </div>
    </div>
  );
}

export default Tiles;
