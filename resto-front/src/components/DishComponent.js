import React, { useState, useEffect } from 'react';
import AuthService from '../services/AuthService';
import DishService from '../services/DishService';
import HTMLUtils from '../utils/HTMLUtils';

function Dishes() {
    const [dishes, setDishes] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) setCurrentUser(user);
        getDishes();
    }, []);

    function getDishes() {

        DishService.getDishes().then((response) => {
            setDishes(response.data);
        });
    };

    function constructView() {
        if (currentUser === undefined) {
            HTMLUtils.alertMessage("You have no access to this resource. Try logging in first!");
        } else {
            if (dishes.length === 0) {
                HTMLUtils.alertMessage("There are no dishes for the moment!");
            } else {
                return (
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
                );
            }
        }
    };


    return (
        <div className="container">
            <h1 className="text-center"> Dishes List</h1>
            {constructView()}
        </div>
    )

}

export default Dishes;