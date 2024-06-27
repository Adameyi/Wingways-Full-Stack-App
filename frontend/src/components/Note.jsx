import React from "react";

function Note({ note, onDelete }) {
    const formatDate = note.created_at
        ? new Date(note.created_at).toLocaleDateString("en-US")
        : new Date().toLocaleDateString("en-US"); // Use current date if note.created_at is not available

    return (
        <div className="mt-2 ml-2 p-3 rounded-lg shadow-lg max-w-md mx-auto bg-white">
            <h1 className=" text-xl">{note.title}</h1>
            < p > {note.content}</p >
            <p className="text-sm text-slate-500">{formatDate}</p>
            <button className="rounded mt-2 bg-rose-600 p-2 text-white" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div >
    );
}

export default Note;
