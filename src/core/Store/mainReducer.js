import { combineReducers } from 'redux';
import EmployeeDetailsReducer from "../../modules/HomePage/homepageReducers";


export default combineReducers({
    employeeData: EmployeeDetailsReducer
});
