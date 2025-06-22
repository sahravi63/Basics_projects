import React, { useState, useCallback } from "react";
import './p1.css';

function P1() {
  const [Length, setLength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "asdfghjklqwertyuiopzxcvbnmASDFGHJKLZXCVBNMQWERTYUIOP";

    if (NumberAllowed) str += "0123456789";
    if (CharacterAllowed) str += "!@#$%^&*()_+";

    if (str.length === 0) {
      alert("Please select at least one option (Number or Character).");
      return;
    }

    for (let i = 0; i < Length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
    setCopySuccess(""); // clear previous copy status
  }, [Length, NumberAllowed, CharacterAllowed]);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  return (
    <div className="password-generator">
      <p>This site helps you to create secure passwords</p>
      <div className="form">
        <div className="password-output">
          <input
            type="text"
            value={password}
            placeholder="Generated password"
            readOnly
          />
          <button onClick={copyToClipboard}>Copy</button>
          <span>{copySuccess}</span>
        </div>

        <button onClick={generatePassword} disabled={!NumberAllowed && !CharacterAllowed}>
          Generate Password
        </button>

        <div className="password-option">
          <input
            type="range"
            min={6}
            max={40}
            value={Length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {Length}</label>
        </div>

        <div className="number-option">
          <input
            type="checkbox"
            checked={NumberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            id="numberAllowed"
          />
          <label htmlFor="numberAllowed">Include Numbers</label>
        </div>

        <div className="char-option">
          <input
            type="checkbox"
            checked={CharacterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
            id="charAllowed"
          />
          <label htmlFor="charAllowed">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default P1;
