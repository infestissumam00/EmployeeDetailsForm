import { storeConstants } from 'library/common/constants';
import store from 'core/Store';

export const saveEmployeeDetail = (data) => dispatch => {
    let storeData = store.getState().employeeData.employeeData;
    storeData.push(data);
    dispatch({
        type: storeConstants.SAVE_EMPLOYEE,
        payload: storeData,
    });
};

export const deleteEmployeeDetail = () => dispatch => {
    let storeData = store.getState().employeeData.employeeData;
    storeData.pop();
    dispatch({
        type: storeConstants.SAVE_EMPLOYEE,
        payload: storeData,
    });
};

