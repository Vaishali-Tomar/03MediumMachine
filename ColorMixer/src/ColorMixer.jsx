// src/ColorMixer.js

import React, { useState } from 'react';
import './ColorMixer.css';

const ColorMixer = () => {
  const [color1, setColor1] = useState('#ff0000'); // Default to red
  const [color2, setColor2] = useState('#0000ff'); // Default to blue
  const [mixedColor, setMixedColor] = useState('#800080'); // Default to purple (red + blue)

  const mixColors = () => {
    const mixed = mixTwoColors(color1, color2);
    setMixedColor(mixed);
  };

  const resetColors = () => {
    setColor1('#ff0000');
    setColor2('#0000ff');
    setMixedColor('#800080');
  };

  const mixTwoColors = (color1, color2) => {
    // Function to mix two hex colors
    const c1 = parseInt(color1.substring(1), 16);
    const c2 = parseInt(color2.substring(1), 16);
    const r = Math.floor(((c1 >> 16) + (c2 >> 16)) / 2);
    const g = Math.floor((((c1 >> 8) & 0x00FF) + ((c2 >> 8) & 0x00FF)) / 2);
    const b = Math.floor(((c1 & 0x0000FF) + (c2 & 0x0000FF)) / 2);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return (
    <div className="color-mixer">
      <div className="color-inputs">
        <div>
          <label>Color 1</label>
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
          />
        </div>
        <div>
          <label>Color 2</label>
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={mixColors}>Mix Colors</button>
        <button onClick={resetColors}>Reset</button>
      </div>
      <div className="mixed-color-display">
        <label>Mixed Color</label>
        <div
          className="color-box"
          style={{ backgroundColor: mixedColor }}
        >
          {mixedColor}
        </div>
      </div>
    </div>
  );
};

export default ColorMixer;
