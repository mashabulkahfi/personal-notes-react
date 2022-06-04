import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
 
function NoteItem({ title, body, id, createdAt, onDelete, onArchive, titleButton }) {
 	return (
   	<div className="note-item">
			 <NoteItemBody title={title} body={body} createdAt={createdAt}/>
			 <div className="note-item__action">
				 <DeleteButton id={id} onDelete={onDelete}/>
				 <ArchiveButton id={id} onArchive={onArchive} titleButton={titleButton}/>
			 </div>
   	</div>
 	);
}
 
export default NoteItem;