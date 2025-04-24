// export default function BookmarkCard({ bookmark, onDelete }) {
//     return (
//       <div className="bg-white p-4 rounded shadow flex justify-between items-center">
//         <div>
//           <a href={bookmark.url} target="_blank" className="text-lg font-bold text-blue-600">{bookmark.title}</a>
//           <p className="text-sm text-gray-500">{bookmark.tags.join(', ')}</p>
//         </div>
//         <button onClick={() => onDelete(bookmark._id)} className="text-red-500 font-bold">✖</button>
//       </div>
//     )
//   }
  
import { generateShareLink } from '../services/api';

export default function BookmarkCard({ bookmark, onDelete }) {
  const handleShare = async () => {
    const result = await generateShareLink(bookmark._id);
    await navigator.clipboard.writeText(`http://localhost:5173/shared/${bookmark.shareableId || result.shareableLink.split('/').pop()}`);
    alert('✅ Shareable link copied to clipboard!');
  };

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <a href={bookmark.url} target="_blank" className="text-lg font-bold text-blue-600">
          {bookmark.title}
        </a>
        <p className="text-sm text-gray-500">{bookmark.tags.join(', ')}</p>
      </div>
      <div className="flex gap-3">
        <button onClick={handleShare} className="text-green-600 font-bold">🔗</button>
        <button onClick={() => onDelete(bookmark._id)} className="text-red-500 font-bold">✖</button>
      </div>
    </div>
  );
}
