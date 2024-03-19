// controllers/employeeController.js
import Employee from '../models/Employee.js';

// Controller functions for handling employee-related routes

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.render('employees', { employees });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.render('employeeDetails', { employee });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const addEmployeeForm = (req, res) => {
    res.render('addEmployee');
};

const addEmployee = async (req, res) => {
    const { name } = req.body;
    try {
        const newEmployee = await Employee.create({ name });
        res.redirect('/employees');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const editEmployeeForm = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.render('editEmployee', { employee });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const editEmployee = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        await employee.update({ name });
        res.redirect('/employees');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        await employee.destroy();
        res.redirect('/employees');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

export {
    getEmployees,
    getEmployeeById,
    addEmployeeForm,
    addEmployee,
    editEmployeeForm,
    editEmployee,
    deleteEmployee,
};
