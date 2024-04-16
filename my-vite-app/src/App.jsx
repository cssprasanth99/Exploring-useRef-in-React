import { useRef } from "react";
import "./App.css";

function App() {
  const data = useRef(0);
  const data1 = useRef(null);

  console.log(data1);

  function handleChange() {
    let inputVal = data.current.value;
    //Alternatively, to display the input value on the DOM:
    document.getElementById("inputValue").innerText = inputVal;
    console.log(inputVal);
  }

  function handleClick() {
    if (data1.current) {
      data1.current.style.backgroundColor = "blue";
    }
  }

  return (
    <div ref={data1}>
      <input
        type="text"
        placeholder="Enter a valid"
        ref={data}
        onChange={handleChange}
      />
      <p id="inputValue"></p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
