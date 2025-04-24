const express = require('express')
const router = express.Router()
const { getBookmarks, createBookmark, deleteBookmark , generateShareLink , getSharedBookmark} = require('../controllers/bookmarkController')

router.get('/', getBookmarks)
router.post('/', createBookmark)
router.delete('/:id', deleteBookmark)

router.post('/:id/share', generateShareLink); // Generate share link
router.get('/shared/:shareableId', getSharedBookmark); // Ac

module.exports = router
