import React, { useState ,useEffect} from "react";

const Useeffect = () => {
    const [resourcesType, setResourcesType] = useState("posts");
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourcesType}`)
          .then((response) => response.json())
          .then((json) => setItems(json));
    }, [resourcesType]);
    
  return (
    <>
      <div>
        <h2>This is a UseEffect hooks Example</h2>
      </div>
      <div>
        <button onClick={() => setResourcesType("posts")}>Posts</button>
        <button onClick={() => setResourcesType("users")}>Users</button>
        <button onClick={() => setResourcesType("comments")}>Comments</button>
      </div>
          <h1>{resourcesType}</h1>
          <div>
              {items.map(items => {
                  return <pre>{JSON.stringify(items) }</pre>
          })}
          </div>
    </>
  );
};

export default Useeffect;
