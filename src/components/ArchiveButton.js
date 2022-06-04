import React from 'react';

function ArchiveButton({ id, onArchive, titleButton }) {
  return <button className='note-item__archive-button' onClick={() => onArchive(id)}>{titleButton}</button>
}

export default ArchiveButton;