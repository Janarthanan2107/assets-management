// Employee.js
import { sequelizeConfig } from '../config/config.js';
import { Model, DataTypes } from 'sequelize';

class Employee extends Model {}

Employee.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConfig,
    modelName: 'Employee'
});

export default Employee;
