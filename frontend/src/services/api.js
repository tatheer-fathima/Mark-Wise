import axios from 'axios';
const API_BASE = 'http://localhost:5000/api/bookmarks'

export const fetchBookmarks = async () => {
  const res = await fetch(API_BASE)
  return res.json()
}

export const createBookmark = async (bookmark) => {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookmark)
  })
  return res.json()
}

export const deleteBookmark = async (id) => {
  await fetch(`${API_BASE}/${id}`, { method: 'DELETE' })
}

export const generateShareLink = async (id, isPublic = true) => {
  const res = await axios.post(`${API_BASE}/${id}/share`, { isPublic });
  return res.data; // contains { shareableLink, isPublic }
};

export const getSharedBookmark = async (shareableId) => {
  const res = await axios.get(`${API_BASE}/shared/${shareableId}`);
  return res.data;
};
