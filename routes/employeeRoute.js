// src/routes/employeeRoute.js

import express from 'express';
import {
    getEmployees,
    getEmployeeById,
    addEmployeeForm,
    addEmployee,
    editEmployeeForm,
    editEmployee,
    deleteEmployee
} from '../controllers/employeeController.js';

const router = express.Router();

// Employee routes
router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.get('/add', addEmployeeForm);
router.post('/add', addEmployee);
router.get('/edit/:id', editEmployeeForm);
router.post('/edit/:id', editEmployee);
router.get('/delete/:id', deleteEmployee);

export default router;
