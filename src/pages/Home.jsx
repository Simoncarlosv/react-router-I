import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardsPizza from './CardsPizza';
//import pizzas from '../assets/js/pizzas';

export const Home = () =>{
    const [pizza, setPizzas] = useState([]);

    // Consumir la API de pizzas
    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas');
                const data = await response.json();
                setPizzas(data);
            } catch (error) {
                console.error("Error fetching pizzas:", error);
            }
        };
        fetchPizzas();
    }, []);

    return (
        <>
        <Header/>
        <div className='container'>
            <div className='row'>
                {pizza?.map((pizza) => (
                    <div className='col-md-4 col-xs-12 caja-cards' key={pizza.id}>
                         <CardsPizza 
                                titulo={pizza.name} 
                                ingredientes={pizza.ingredients} 
                                precio={pizza.price} 
                                img={pizza.img}
                                descripcion={pizza.desc}
                            />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Home;