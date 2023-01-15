import axios from 'axios';

const DISH_API_BASE_URL = "http://localhost:8080/api/dishes/";

class DishService {
    getDishes(){
        return axios.get(DISH_API_BASE_URL);
    }
}

export default new DishService();