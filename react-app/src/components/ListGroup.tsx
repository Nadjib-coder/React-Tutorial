import { useState } from "react";
// import { MouseEvent } from "react";

// { item: [], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Hook to tell react that this component has data or state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // selectexIndex: variable
  // setSelectedIndex: updater function

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  // handleClick to call is when needed

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
