"use client";

import React, { useState } from "react";

export default function Page() {
  const bgColors = ["white", "lightblue", "red", "green", "cyan", "yellow"];
  const fontColors = ["white", "lightblue", "red", "green", "cyan", "yellow"];

  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [fontColorIndex, setFontColorIndex] = useState(0);

  const changeBgColor = () => {
    setBgColorIndex((prevIndex) => (prevIndex + 1) % bgColors.length);
  };

  const changeFontColor = () => {
    setFontColorIndex((prevIndex) => (prevIndex + 1) % fontColors.length);
  };

  return (
    <div style={{ backgroundColor: bgColors[bgColorIndex], height: "100vh" }}>
      <ul>
        {/* mudar o fundo*/}
        <li>
          <button onClick={changeBgColor}>Mudar Cor da Página</button>
        </li>

        {/* mudar a cor*/}
        <li>
          <p style={{ color: fontColors[fontColorIndex] }}>
            AAAAAAAAAAAAAAAAAAAAA
          </p>
          <button onClick={changeFontColor}>mude e seja feliz</button>
        </li>
      </ul>
    </div>
  );
}
