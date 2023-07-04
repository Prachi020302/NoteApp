export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id);

        // Edit/Update
        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }

        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
    }
     
    // Add favourite button to notes
    static favouriteNote() {
        const notes = NotesAPI.getAllNotes();
        const noteId = notes[0].id;
        const noteFavourite = notes[0].favourite;
        const noteFavouriteUpdated = notes[0].updated;
        if (noteFavourite === 0) {
            noteFavourite = 1;
        } else {
            noteFavourite = 0;
        }

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));


    }
}
