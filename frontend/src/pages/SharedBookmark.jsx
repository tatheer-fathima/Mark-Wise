// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getSharedBookmark } from '../services/api';

// export default function SharedBookmark() {
//   const { shareableId } = useParams();
//   const [bookmark, setBookmark] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     getSharedBookmark(shareableId)
//       .then(res => setBookmark(res.data))
//       .catch(err => setError('Bookmark not found or private.'));
//   }, [shareableId]);

//   if (error) return <div>{error}</div>;
//   if (!bookmark) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Shared Bookmark</h1>
//       <a href={bookmark.url}>{bookmark.title}</a>
//       <p>Shared by: {bookmark.user?.name || 'Anonymous'}</p>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSharedBookmark } from '../services/api';

export default function SharedBookmark() {
  const { shareableId } = useParams();
  const [bookmark, setBookmark] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSharedBookmark(shareableId)
      .then(setBookmark)
      .catch(() => setError("Bookmark not found or is private."));
  }, [shareableId]);

  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!bookmark) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-2">{bookmark.title}</h2>
      <a href={bookmark.url} target="_blank" className="text-blue-500 underline">{bookmark.url}</a>
      <p className="text-sm text-gray-600 mt-2">Tags: {bookmark.tags.join(', ')}</p>
    </div>
  );
}
