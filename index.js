const express = require('express');
const bodyParser = require('body-parser');
const employeeRouter = require('./routes/employeeRoute');
const assetsRouter = require('./routes/assetsRoute');
const assetCategoryRouter = require('./routes/assetCategoryRoute');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

// Set the view engine to use Pug
app.set('view engine', 'pug');

// Assuming employeesData is an array of employee objects
const employeesData = [
    { id: '', name: '' },
];

app.get('/', (req, res) => {
    res.render('employees', { employees: employeesData });
});

app.get('/add-employee', (req, res) => {
    res.render('addEmployee');
});

app.get('/employees/edit/', (req, res) => {
    res.render('editEmployee');
});

// Use employee routes
app.use('/employees', employeeRouter);

// Use asset routes
app.use('/assets', assetsRouter);

// Use asset category routes
app.use('/asset-categories', assetCategoryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
