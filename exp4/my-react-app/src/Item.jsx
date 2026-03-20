import { useState } from "react";

function Item(props) {

  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <h3>{props.title}</h3>

      <button onClick={() => setClicked(!clicked)}>
        {clicked ? "Clicked" : "Click Me"}
      </button>

    </div>
  );
}

export default Item;