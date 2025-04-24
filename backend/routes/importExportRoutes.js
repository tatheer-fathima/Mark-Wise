// routes/importExportRoutes.js
const express = require('express');
const router = express.Router();
const importExportController = require('../controllers/importExportController');

// Export bookmarks (GET)
router.get('/export', importExportController.exportBookmarks);

// Import bookmarks (POST)
router.post('/import', importExportController.importBookmarks);

module.exports = router; // ✅ Must export the router