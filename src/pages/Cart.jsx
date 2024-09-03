import React from 'react';
import { useState } from 'react';
import pizzas from '../assets/js/pizzas';

const Cart = () => {
    // Inicializar el carrito con la cantidad de cada pizza en 1
    const initialCart = pizzas.map(pizza => ({ ...pizza, cantidad: 1 }));
    const [cart, setCart] = useState(initialCart);

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(pizza => 
            pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
        );
        setCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart
            .map(pizza => pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza)
            // Eliminar pizzas con cantidad 0
            .filter(pizza => pizza.cantidad > 0); 
        setCart(updatedCart);
    };

    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.cantidad, 0);

    return (
        <div className="container mt-5">
            <h2>Carrito de Compras</h2>
            <ul className="list-group">
                {cart.map((pizza) => (
                    <li className="list-group-item" key={pizza.id}>
                        <img 
                            src={pizza.img} 
                            alt={pizza.name} 
                            style={{ width: '50px', marginRight: '10px' }} 
                        />
                        {pizza.name} - {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} x {pizza.cantidad}
                        <button className="btn btn-danger btn-sm mx-2" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                        <button className="btn btn-success btn-sm" onClick={() => increaseQuantity(pizza.id)}>+</button>
                    </li>
                ))}
            </ul>
            <h3 className="mt-3">Total: {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
            <button className="btn btn-primary mt-3">Pagar</button>
        </div>
    );
};

export default Cart;