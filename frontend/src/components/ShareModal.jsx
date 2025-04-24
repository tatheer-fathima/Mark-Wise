// components/ShareModal.jsx
export default function ShareModal({ link, onClose }) {
    return (
      <div className="modal">
        <h2>Share Bookmark</h2>
        <input type="text" value={link} readOnly />
        <button onClick={() => navigator.clipboard.writeText(link)}>
          Copy Link
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }