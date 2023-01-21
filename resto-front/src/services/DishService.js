import axios from 'axios';
import authHeader from './auth-header';

const DISH_API_BASE_URL = "http://localhost:8080/api/dishes/";

class DishService {
    getDishes(){
        return axios.get(DISH_API_BASE_URL, {header: authHeader()});
    }
}

export default new DishService();