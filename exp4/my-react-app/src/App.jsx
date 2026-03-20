import { useEffect, useState } from "react";
import Item from "./Item";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h1>API Items</h1>

     {items.map(item => (
  <Item key={item.id} title={"Item " + item.id} />
))}

    </div>
  );
}

export default App;