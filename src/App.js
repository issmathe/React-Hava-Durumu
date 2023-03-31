//kodla öğren 2.video 6.dk

import React,{useState} from "react";
import Arkaplan from "./Bileşenler/ArkaPlan"
import AramaCubugu from "./Bileşenler/Arama/AramaCubugu";
import Sonuc from "./Bileşenler/Sonuc"
import "./index.css"



function App() {

  const [havaDurumu,belirtHavaDurumu]=useState({})

  return (
    <section className="uygulama">
      <div id="baslik">Hava Durumu</div>
      <Arkaplan/>
      <AramaCubugu belirtHavaDurumu={belirtHavaDurumu}/>
      <Sonuc hava={havaDurumu}/>
       
    </section>
  );
}

export default App;
