import {Validators} from '../../library/utilities/Validators';

export const loginImage = require('../../resources/images/loginBackground.png');

export const employeeTableModel = [
    {title: "Name", field: "name", sorting: true, filtering: true},
    {title: "Employee ID", field: "employeeId", sorting: false, filtering: false},
    {title: "Email", field: "email", sorting: true, filtering: true},
    {title: 'Joining Date', field: 'joiningDate', type: 'date', sorting: true, filtering: true}
]


export const employeeFormModel = [
    {
        label: 'Name',
        value: '',
        type: 'text',
        placeholder: '',
        field: 'name',
        validators: [
            {check: Validators.required, message: 'Name is mandatory'},
        ],
        required: true,
        styleClass: 'col-sm-12',
    },
    {
        label: 'Employee ID',
        value: '',
        type: 'text',
        placeholder: '',
        field: 'employeeId',
        validators: [{check: Validators.required, message: 'Employee ID is mandatory'}],
        required: true,
        styleClass: 'col-sm-12',
    },

    {
        label: 'Email',
        value: '',
        type: 'text',
        placeholder: '',
        field: 'email',
        validators: [
            {check: Validators.required, message: 'Name is mandatory'},
            {check: Validators.email, message: 'Email is Invalid'},
        ],
        required: true,
        styleClass: 'col-sm-12',
    },

    {
        label: 'Date of Joining',
        value: '',
        type: 'date',
        placeholder: '',
        field: 'joiningDate',
        validators: [
            {check: Validators.required, message: 'Name is mandatory'},
        ],
        required: true,
        styleClass: 'col-sm-12',
    },
];

