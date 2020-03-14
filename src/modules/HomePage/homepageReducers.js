import { storeConstants } from 'library/common/constants';

const initialState = {
    employeeData: [],
    error: true,
};

const EmployeeDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeConstants.SAVE_EMPLOYEE:
            return {
                ...state,
                employeeData: action.payload,
                error: false,
            };
        default:
            return state;
    }
};

export default EmployeeDetailsReducer;
