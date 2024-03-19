// controllers/assetCategoryController.js
import AssetCategory from '../models/AssetCategory.js';

// Controller functions for handling asset category-related routes

const getAssetCategories = async (req, res) => {
    try {
        const assetCategories = await AssetCategory.findAll();
        res.render('assetCategories', { assetCategories });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAssetCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const assetCategory = await AssetCategory.findByPk(id);
        if (!assetCategory) {
            return res.status(404).send('Asset category not found');
        }
        res.render('assetCategoryDetails', { assetCategory });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const addAssetCategoryForm = (req, res) => {
    res.render('addAssetCategory');
};

const addAssetCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const newAssetCategory = await AssetCategory.create({ name });
        res.redirect('/asset-categories');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const editAssetCategoryForm = async (req, res) => {
    const { id } = req.params;
    try {
        const assetCategory = await AssetCategory.findByPk(id);
        if (!assetCategory) {
            return res.status(404).send('Asset category not found');
        }
        res.render('editAssetCategory', { assetCategory });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const editAssetCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const assetCategory = await AssetCategory.findByPk(id);
        if (!assetCategory) {
            return res.status(404).send('Asset category not found');
        }
        await assetCategory.update({ name });
        res.redirect('/asset-categories');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteAssetCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const assetCategory = await AssetCategory.findByPk(id);
        if (!assetCategory) {
            return res.status(404).send('Asset category not found');
        }
        await assetCategory.destroy();
        res.redirect('/asset-categories');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

export {
    getAssetCategories,
    getAssetCategoryById,
    addAssetCategoryForm,
    addAssetCategory,
    editAssetCategoryForm,
    editAssetCategory,
    deleteAssetCategory,
};
