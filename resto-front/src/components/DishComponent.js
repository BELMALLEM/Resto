import React, { useState, useEffect } from 'react';
import DishService from '../services/DishService';

function DishComponent() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        getDishes();
    }, []);

    function getDishes() {

        DishService.getDishes().then((response) => {
            setDishes(response.data);
        });
    };

    return (
        <div className="container">

            <h1 className="text-center"> Employees List</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Dish Id</th>
                        <th> Dish Name</th>
                        <th> Dish Price</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        dishes.map(
                            dish =>
                                <tr key={dish.id}>
                                    <td> {dish.id}</td>
                                    <td> {dish.name}</td>
                                    <td> {dish.price}</td>
                                </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    )

}

export default DishComponent;