import React, { useState } from "react";
function AramaCubugu({belirtHavaDurumu}) {
  const api = {
    key: "2d178176a844e521c5e0288bdeee8618",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  const [araParametre, belirtAraParametre] = useState("");
  const ara = (e) => {
    if (e.key === "Enter") {
      fetch(
        `${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`
      )
        .then((veri) => veri.json())
        .then((sonuc) => {
          belirtAraParametre("");
          belirtHavaDurumu(sonuc);
          console.log(sonuc);
        });
    }
  };
  return (
    <div className="arama">
      <input
        type="text"
        className="arama-input"
        placeholder="Şehir"
        value={araParametre}
        onChange={(e) => belirtAraParametre(e.target.value)}
        onKeyPress={ara}
      ></input>
    </div>
  );
}
export default AramaCubugu;
