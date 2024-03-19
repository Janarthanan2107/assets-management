// models/AssetCategory.js
import { sequelizeConfig } from '../config/config.js'; // Import sequelize as a named import
import { Model, DataTypes } from 'sequelize';

class AssetCategory extends Model {
    // Add class methods or associations here
}

AssetCategory.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // Define other attributes for the AssetCategory model
}, {
    sequelize: sequelizeConfig, // Pass sequelizeConfig as the sequelize option
    modelName: 'AssetCategory'
});

export default AssetCategory;