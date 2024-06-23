import { useCallback, useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passwordRef = useRef(null);

  const passwordGen = useCallback(() => {
    let passw = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()[]_+`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      passw += str.charAt(char);
    }


    setPass(passw);
  }, [length, num, char, setPass]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(pass)
  }, [pass])
  useEffect(()=>{
    passwordGen()
  },[length, num, char, passwordGen])

  return (
    <>
      <div className="text-1.5xl w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-5 text-orange-300 bg-gray-600">
        <h1 className="text-white text-center mx-3">Password Genertare</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Passward"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClip} className="outline-none bg-blue-600 text-white px-3 py-1 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap--x-2">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">length: {length}</label>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              defaultChecked={char}
              id="numberInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;