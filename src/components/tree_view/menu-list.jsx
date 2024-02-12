import MenuItem from "./menu-item";
import "./tree_view.styles.css";

export default function MenuList({ list = [], showAll }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem item={listItem} key={listItem.id} showAll={showAll} />
          ))
        : null}
    </ul>
  );
}
