// models/Asset.js
import { sequelizeConfig } from '../config/config.js'; // Import sequelize as a named import
import { Model, DataTypes } from 'sequelize';

class Asset extends Model {
    // Add class methods or associations here
}

Asset.init({
    serialNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // Define other attributes for the Asset model
}, {
    sequelize: sequelizeConfig, // Correct the option name to `sequelize`
    modelName: 'Asset'
});

export default Asset;
