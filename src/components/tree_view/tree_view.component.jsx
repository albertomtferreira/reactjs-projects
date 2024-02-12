import { useState } from "react";
import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  const [expanded, setExpanded] = useState(false);

  function handleShowAllChildren() {
    setExpanded(!expanded);
  }
  return (
    <div className="tree-view-container">
      <div className="menu-list">
        <span onClick={() => handleShowAllChildren()}>
          {!expanded ? "Expand all" : "Colapse all"}
        </span>
      </div>
      <MenuList list={menus} showAll={expanded} />
    </div>
  );
}
