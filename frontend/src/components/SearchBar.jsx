export default function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search by title or tag"
        className="border p-2 w-full mb-4"
        onChange={(e) => onSearch(e.target.value)}
      />
    )
  }
  