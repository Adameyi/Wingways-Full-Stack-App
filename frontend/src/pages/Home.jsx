import { useState, useEffect } from "react"
import api from "../api"
import Note from "../components/Note"

function Home() {
    const [notes, setNotes] = useState([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => {
                setNotes(res.data)  // Use res.data to set the notes
                console.log(res.data)
            })
            .catch((err) => alert(err))
    }

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Note deleted!")
                } else {
                    alert("Failed to delete note")
                }
                getNotes()  // Call getNotes after deletion to refresh the notes list
            }).catch((error) => alert(error))
    }

    const createNote = (e) => {
        e.preventDefault()
        api
            .post("/api/notes/", { content, title }).then((res) => {
                if (res.status === 201) {
                    alert("Note created!")
                } else {
                    alert("Failed to create a Note.")
                }
                getNotes()  // Call getNotes after creation to refresh the notes list
            }).catch((error) => alert(error))
    }

    return (
        <div>
            <div className="ml-2 mt-2 p-6 rounded-lg shadow-lg max-w-md bg-slate-100">
                <h2 className="text-3xl"> Notes</h2>
                <ul>
                    {notes.map((note) => (
                        // <li key={note.id}>
                        //     <h3>{note.title}</h3>
                        //     <p>{note.content}</p>
                        //     <button onClick={() => deleteNote(note.id)}>Delete</button>
                        // </li>
                        <Note note={note} onDelete={deleteNote} key={note.id} />
                    ))}
                </ul>
            </div>
            <div className="ml-2 mt-2 p-6 rounded-lg shadow-lg max-w-md mx-auto bg-slate-100">
                <h2 className="text-3xl mb-6">Create a Note</h2>
                <form onSubmit={createNote}>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        className="p-2 w-full"
                        placeholder="Title Name"
                        type="text"
                        id="title"
                        name="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br />
                    <label htmlFor="content">Content:</label>
                    <br />
                    <textarea
                        className="p-2 w-full"
                        placeholder="Insert Content Here"
                        name="content"
                        id="content"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <br />
                    <input type="submit" value="Submit" className="rounded mt-2 bg-blue-600 p-2 text-white" />
                </form>
            </div>
        </div>
    )
}

export default Home
