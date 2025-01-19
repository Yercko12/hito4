import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizzas";
import Home from "./components/Home";
import './App.css'
/* import Login from "./components/Login";
import Register from "./components/Register"; */


const App = () => {
    const [selectedPizza, setSelectedPizza] = useState(null);

    return (
        <div>
            <Navbar />
          {/* <Login/>
          <Register/> */}
            {selectedPizza ? (
                <Pizza pizzaId={selectedPizza} />
            ) : (
                <Home onSelectPizza={(id) => setSelectedPizza(id)} />
            )}
            <Footer />
        </div>
    );
};

export default App;
