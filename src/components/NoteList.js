import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete, onArchive, active }) {
  let validNote;
  let titleButton;

  if (active === true) {
    validNote = notes.filter(note => {
      return note.archived===false;
    });
    titleButton = 'Arsipkan'
  } else {
    validNote = notes.filter(note => {
      return note.archived===true;
    });
    titleButton = 'Pindahkan'
  }
 return (
   <div className="notes-list">
     { validNote.length > 0 ?
       validNote.map((note) => (
         <NoteItem 
          key={note.id} 
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          titleButton={titleButton}
          {...note} />
       ))
       : <p className="notes-list__empty-message">Tidak ada catatan</p>
     }
   </div>
 );
}
 
export default NoteList;