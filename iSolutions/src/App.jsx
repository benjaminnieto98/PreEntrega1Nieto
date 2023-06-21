import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./components/Styles.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      </div>
    </>
  );
}

export default App;
