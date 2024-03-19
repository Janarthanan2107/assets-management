// src/routes/assetCategoryRoute.js

import express from 'express';
import {
    getAssetCategories,
    getAssetCategoryById,
    addAssetCategoryForm,
    addAssetCategory,
    editAssetCategoryForm,
    editAssetCategory,
    deleteAssetCategory
} from '../controllers/assetCategoryController.js';

const router = express.Router();

// Asset Category routes
router.get('/', getAssetCategories);
router.get('/:id', getAssetCategoryById);
router.get('/add', addAssetCategoryForm);
router.post('/add', addAssetCategory);
router.get('/edit/:id', editAssetCategoryForm);
router.post('/edit/:id', editAssetCategory);
router.get('/delete/:id', deleteAssetCategory);

export default router;
