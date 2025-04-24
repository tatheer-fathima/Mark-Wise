import { useState } from 'react';
import { fetchBookmarks, shareBookmark } from '../services/api';

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState([]);
  const [shareLink, setShareLink] = useState('');

  // Fetch bookmarks on load
  useEffect(() => {
    fetchBookmarks().then(res => setBookmarks(res.data));
  }, []);

  // Generate shareable link
  const handleShare = async (bookmarkId) => {
    const res = await shareBookmark(bookmarkId, true); // isPublic: true
    setShareLink(res.data.shareableLink);
  };

  return (
    <div>
      <h1>My Bookmarks</h1>
      <ul>
        {bookmarks.map(bookmark => (
          <li key={bookmark._id}>
            <a href={bookmark.url}>{bookmark.title}</a>
            <button onClick={() => handleShare(bookmark._id)}>Share</button>
          </li>
        ))}
      </ul>
      {shareLink && (
        <div>
          <p>Shareable link:</p>
          <input type="text" value={shareLink} readOnly />
          <button onClick={() => navigator.clipboard.writeText(shareLink)}>
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
}