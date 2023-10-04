import React, { useEffect, useMemo, useState } from "react";

const Usememo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
                return showFunction(number);
    },[number]
    )
        
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        }
    },[dark])
    
    useEffect(() => {
        console.log("Theme Change")
    }, [themeStyles]);
  function showFunction(num) {
    console.log("Calling the show function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }
  return (
    <>
      <h2>This is Example of Usememo Hooks</h2>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </>
  );
};

export default Usememo;
