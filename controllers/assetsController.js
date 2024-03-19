// controllers/assetsController.js
import Asset from '../models/Asset.js';

// Controller functions for handling asset-related routes

const getAssets = async (req, res) => {
    try {
        const assets = await Asset.findAll();
        res.render('assets', { assets });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAssetById = async (req, res) => {
    const { id } = req.params;
    try {
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        res.render('assetDetails', { asset });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const addAssetForm = (req, res) => {
    res.render('addAsset');
};

const addAsset = async (req, res) => {
    const { name } = req.body;
    try {
        const newAsset = await Asset.create({ name });
        res.redirect('/assets');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const editAssetForm = async (req, res) => {
    const { id } = req.params;
    try {
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        res.render('editAsset', { asset });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const editAsset = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        await asset.update({ name });
        res.redirect('/assets');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteAsset = async (req, res) => {
    const { id } = req.params;
    try {
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        await asset.destroy();
        res.redirect('/assets');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

export {
    getAssets,
    getAssetById,
    addAssetForm,
    addAsset,
    editAssetForm,
    editAsset,
    deleteAsset,
};
