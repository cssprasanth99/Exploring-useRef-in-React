import { useRef, useEffect } from "react";

function TextInputWithFocus() {
  const inputEl = useRef(null);

  //   useEffect(() => {
  //     // Automatically focus the input using the useRef hook
  //     inputEl.current.focus();
  //   }, []);

  console.log(inputEl);

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={() => inputEl.current.focus()}>Click Here</button>
    </>
  );
}

export default TextInputWithFocus;
