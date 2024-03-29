// App.jsx

import React from "react";
import backgroundImg from "./assets/gradient.png";
import Card from "./components/card";  // Change 'card' to 'Card'

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="h-screen w-screen bg-cover bg-center"
    >
      <div className="container mx-auto flex items-center justify-center h-screen">
        <Card />
      </div>
    </div>
  );
}

export default App;
