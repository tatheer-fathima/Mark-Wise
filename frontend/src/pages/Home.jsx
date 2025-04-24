// import { useEffect, useState } from 'react'
// import { fetchBookmarks, createBookmark, deleteBookmark } from '../services/api'
// import BookmarkCard from '../components/BookmarkCard'
// import SearchBar from '../components/SearchBar'
// import ExportImportButtons from '../components/ExportImportButtons'
// import "../index.css"

// export default function Home() {
//   const [bookmarks, setBookmarks] = useState([])
//   const [form, setForm] = useState({ title: '', url: '', tags: '' })
//   const [search, setSearch] = useState('')

//   const filtered = bookmarks.filter(b =>
//     b.title.toLowerCase().includes(search.toLowerCase()) ||
//     b.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
//   )

//   useEffect(() => {
//     fetchBookmarks().then(setBookmarks)
//   }, [])

//   const handleAdd = async () => {
//     const newB = await createBookmark({
//       ...form,
//       tags: form.tags.split(',').map(tag => tag.trim())
//     })
//     setBookmarks([newB, ...bookmarks])
//     setForm({ title: '', url: '', tags: '' })
//   }

//   const handleDelete = async (id) => {
//     await deleteBookmark(id)
//     setBookmarks(bookmarks.filter(b => b._id !== id))
//   }

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Markwise</h1>

//       <div className="mb-4 space-y-2">
//         <SearchBar onSearch={setSearch} />
//         <input
//           type="text"
//           placeholder="Title"
//           className="border p-2 w-full"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />
//         <input
//           type="url"
//           placeholder="https://"
//           className="border p-2 w-full"
//           value={form.url}
//           onChange={(e) => setForm({ ...form, url: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="tags, comma separated"
//           className="border p-2 w-full"
//           value={form.tags}
//           onChange={(e) => setForm({ ...form, tags: e.target.value })}
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleAdd}>
//           Save Bookmark
//         </button>
//       </div>

//       <ExportImportButtons onImport={(newB) => setBookmarks([...newB, ...bookmarks])} />

//       <div className="space-y-3">
//         {filtered.map(b => (
//           <BookmarkCard key={b._id} bookmark={b} onDelete={handleDelete} />
//         ))}
//       </div>
//     </div>
//   )
// }
import { useEffect, useState } from 'react'
import { fetchBookmarks, createBookmark, deleteBookmark } from '../services/api'
import BookmarkCard from '../components/BookmarkCard'
import SearchBar from '../components/SearchBar'
import "../index.css"

export default function Home() {
  const [bookmarks, setBookmarks] = useState([])
  const [form, setForm] = useState({ title: '', url: '', tags: '' })
  const [search, setSearch] = useState('')

  const filtered = bookmarks.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  )

  useEffect(() => {
    fetchBookmarks().then(setBookmarks)
  }, [])

  const handleAdd = async () => {
    const newB = await createBookmark({
      ...form,
      tags: form.tags.split(',').map(tag => tag.trim())
    })
    setBookmarks([newB, ...bookmarks])
    setForm({ title: '', url: '', tags: '' })
  }

  const handleDelete = async (id) => {
    await deleteBookmark(id)
    setBookmarks(bookmarks.filter(b => b._id !== id))
  }

  return (
    <div className="min-h-screen w-full bg-[#070738] animate-gradient flex items-center justify-center p-6">

      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-2xl text-white">
        <h1 className="text-4xl font-extrabold text-center mb-6 drop-shadow-md">Markwise</h1>

        <div className="space-y-3 mb-6">
          <SearchBar onSearch={setSearch} />
          <input
            type="text"
            placeholder="Title"
            className="bg-white/20 text-white placeholder-white/70 p-3 w-full rounded outline-none"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            type="url"
            placeholder="https://"
            className="bg-white/20 text-white placeholder-white/70 p-3 w-full rounded outline-none"
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
          />
          <input
            type="text"
            placeholder="tags, comma separated"
            className="bg-white/20 text-white placeholder-white/70 p-3 w-full rounded outline-none"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />
          <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded w-full transition">
            Save Bookmark
          </button>
        </div>

      

        <div className="space-y-3 mt-6">
          {filtered.map(b => (
            <BookmarkCard key={b._id} bookmark={b} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  )
}
