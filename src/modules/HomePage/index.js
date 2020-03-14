import React, {Component, createRef} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {Button, Form} from 'library/common/components';

import {employeeFormModel, loginImage, employeeTableModel} from './constants';
import './homePageStyles.scss';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MaterialTable from "material-table";
import {tableIcons} from "../../library/common/constants/TableIconsConstants";
import ClearIcon from '@material-ui/icons/Clear';
import {saveEmployeeDetail, deleteEmployeeDetail} from "./homePageActions";


export class HomePage extends Component {
    formRef = createRef();

    state = {
        isLoading: false,
        formError: null,
        isFormVisible: false,
        employeeData: [],
    };

    static getDerivedStateFromProps(nextProps) {
        return {
            employeeData: nextProps.employeeDetails.employeeData
        }
    }


    componentDidMount() {
        document.title = 'HomePage';
    }

    handleAdd = () => {
        this.setState({isFormVisible: true})
    };

    handleClear = () => {
        this.formRef.resetForm();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const values = this.formRef.getFormData();
        const {formData, isFormValid} = values;
        if (isFormValid) {
            this.props.saveEmployeeDetail(formData);
            this.handleClose();
        } else {
            this.setState({isLoading: false, formError: 'Please fill all the details.'});
        }
    };

    handleClose = () => {
        this.setState({isFormVisible: false, formError: null})
    };

    render() {
        const {isLoading, formError, isFormVisible, employeeData} = this.state;

        return (
            <div className="login bg-white d-flex justify-content-center align-items-center">
                <div className="col-5 login-background p-0">
                    <img src={loginImage} alt="background"/>
                </div>
                <div className="col-7 login-form vh-100 d-flex justify-content-center align-items-center">
                    <div className='row  table-cont align-items-center justify-content-center'>
                        {employeeData.length > 0 ?
                            <MaterialTable
                                icons={tableIcons}
                                options={{
                                    search: false,
                                    pageSizeOptions: false
                                }}
                                columns={employeeTableModel}
                                data={employeeData}
                                actions={[
                                    {
                                        icon: () => <ClearIcon/>,
                                        tooltip: 'Delete Entry',
                                        onClick: () => this.props.deleteEmployeeDetail()
                                    }
                                ]}
                                title="New Employees Details"
                            /> :
                            <Button
                                type="submit"
                                loading={isLoading}
                                onClick={this.handleAdd}
                                styleClass="btn-success btn-block btn-style"
                                value={'Add New Employee'}
                            />}
                    </div>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className='modal'
                    open={isFormVisible}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={isFormVisible}>
                        <div className="col-sm-5 paper">
                            <h4 className="pb-4">New Employee Details</h4>
                            {!!formError && <p className="text-danger">{formError}</p>}
                            <form onSubmit={this.handleSubmit}>
                                <Form
                                    ref={el => {
                                        this.formRef = el;
                                    }}
                                    model={employeeFormModel}
                                />
                                <div className='row p-5'>
                                    <Button
                                        type="submit"
                                        loading={isLoading}
                                        onClick={this.handleClear}
                                        styleClass="btn-success btn-block"
                                        value={'Clear'}
                                    />
                                    <Button
                                        type="submit"
                                        loading={isLoading}
                                        onClick={this.handleSubmit}
                                        styleClass="btn-success btn-block"
                                        value={'Submit'}
                                    />
                                </div>
                            </form>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (employeeData) => {
    return {
        employeeDetails: employeeData.employeeData
    };
};

export default withRouter(connect(mapStateToProps, {saveEmployeeDetail, deleteEmployeeDetail})(HomePage));
