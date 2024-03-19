// Import express and other required modules
import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize'; // Import Sequelize
import employeeRouter from './routes/employeeRoute.js';
import assetsRouter from './routes/assetsRoute.js';
import assetCategoryRouter from './routes/assetCategoryRoute.js';
import { sequelizeConfig } from './config/config.js';

// Create an express application
const app = express();

// Middleware to parse JSON bodies and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
const sequelize = new Sequelize(sequelizeConfig);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

// Define a route to handle requests to the root URL ("/")
app.get('/', (req, res) => {
    res.send('Welcome to the Asset Management System!');
});

// Use employee routes
app.use('/employees', employeeRouter);

// Use asset routes
app.use('/assets', assetsRouter);

// Use asset category routes
app.use('/asset-categories', assetCategoryRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
