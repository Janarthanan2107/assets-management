// src/routes/assetsRoute.js

import express from 'express';
import {
    getAssets,
    getAssetById,
    addAssetForm,
    addAsset,
    editAssetForm,
    editAsset,
    deleteAsset
} from '../controllers/assetsController.js';

const router = express.Router();

// Asset routes
router.get('/', getAssets);
router.get('/:id', getAssetById);
router.get('/add', addAssetForm);
router.post('/add', addAsset);
router.get('/edit/:id', editAssetForm);
router.post('/edit/:id', editAsset);
router.get('/delete/:id', deleteAsset);

export default router;
