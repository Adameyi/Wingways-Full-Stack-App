import React, { useState } from "react"

function Note({ note, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content);

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleCancel = () => {
        setIsEditing(false)
        setTitle(note.title)
        setContent(note.content)

    }

    const handleSave = (e) => {
        e.preventDefault();
        onUpdate(note.id, title, content)
        setIsEditing(false);
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            timeZoneName: "short"
        })
    }

    const createdDate = formatDate(note.created_at)
    const editedDate = note.updated_at && note.updated_at !== note.created_at ? formatDate(note.updated_at) : null

    return (
        <div className="mt-2 ml-2 p-3 rounded-lg shadow-lg max-w-md mx-auto bg-white">
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input
                        className="p-2 w-full"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        className="p-2 w-full"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <button onClick={handleCancel} className="rounded mt-2 bg-gray-600 p-2 text-white">
                        Cancel
                    </button>
                    <button type="submit" className="rounded mt-2 bg-blue-600 p-2 text-white">
                        Save
                    </button>
                </form>
            ) : (
                <>
                    <h1 className=" text-xl">{note.title}</h1>
                    < p > {note.content}</p >
                    <p className="text-sm text-slate-500">{formatDate}</p>
                    <button onClick={handleEdit} className="rounded mt-2 bg-blue-600 p-2 text-white">
                        Edit
                    </button>
                    <button onClick={() => onDelete(note.id)} className="rounded mt-2 bg-rose-600 p-2 text-white">
                        Delete
                    </button>
                </>
            )}
        </div>
    )
}

export default Note
