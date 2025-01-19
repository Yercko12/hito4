import React, { useState, useEffect } from "react";
import Header from "./Header";

const Pizza = ({ pizzaId }) => {
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
            .then((response) => response.json())
            .then((data) => setPizza(data))
            .catch((err) => setError("Error al obtener los detalles de la pizza"));
    }, [pizzaId]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!pizza) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="pizza-detail">
            <Header/>
            <img src={pizza.img} alt={pizza.name} />
            <h1>Pizza {pizza.name}</h1>
            <p className="card-text"><strong>Descripción:</strong> {pizza.desc}</p>
            <p className="card-text"><strong>🍕Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
            <p className="card-text"><strong>Precio:</strong> ${pizza.price}</p>
            <button className="btn btn-secondary ms-2">Añadir al carrito</button>
            <button onClick={() => window.location.reload()} className="btn btn-secondary ms-2">Volver al inicio</button>
        </div>
    );
};

export default Pizza;
