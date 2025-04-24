const Bookmark = require('../models/Bookmark')
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

exports.getBookmarks = async (req, res) => {
  const bookmarks = await Bookmark.find()
  res.json(bookmarks)
}

exports.createBookmark = async (req, res) => {
  const { title, url, tags } = req.body
  const newBookmark = new Bookmark({ title, url, tags })
  await newBookmark.save()
  res.status(201).json(newBookmark)
}

exports.deleteBookmark = async (req, res) => {
  const { id } = req.params
  await Bookmark.findByIdAndDelete(id)
  res.status(204).send()
}


exports.generateShareLink = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    if (!bookmark) return res.status(404).json({ error: "Bookmark not found." });

    // Generate a unique shareableId (e.g., "abc123")
    bookmark.shareableId = uuidv4().substring(0, 8); // Short random ID
    bookmark.isPublic = req.body.isPublic || false; // Default: private
    await bookmark.save();

    res.json({
      shareableLink: `http://localhost:5000/api/bookmarks/shared/${bookmark.shareableId}`,
      isPublic: bookmark.isPublic,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate share link." });
  }
};

exports.getSharedBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findOne({ shareableId: req.params.shareableId });
    if (!bookmark || !bookmark.isPublic) {
      return res.status(404).json({ error: "Bookmark not found or private." });
    }
    res.json(bookmark);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch shared bookmark." });
  }
};