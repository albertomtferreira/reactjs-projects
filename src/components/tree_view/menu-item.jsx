import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import MenuList from "./menu-list";

export default function MenuItem({ item, showAll }) {
  const [showCurrentChildren, setShowCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setShowCurrentChildren({
      ...showCurrentChildren,
      [getCurrentLabel]: !showCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <li>
      <div className="menu-item-container">
        <p>{item.label}</p>

        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {!showCurrentChildren[item.label] ? (
              <FaPlus color="#fff" size={25} cursor="pointer" />
            ) : (
              <FaMinus color="#fff" size={25} cursor="pointer" />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      showCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
