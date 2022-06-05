import React from 'react';
import { getInitialData } from '../utils/index';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';

class NoteApp extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
			keyword: '',
    }

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onKeywordAddHandler = this.onKeywordAddHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
		
    this.setState((prevState) => {
			return {
				...prevState, notes
			}
	 	});
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map(note => {
    // if note.id == id update note.archived value based on previous value
			if (note.id === id){
				if (note.archived === true){
					return {...note, archived:false};
				} else {
					return {...note, archived:true};
				}
			}
      return note
    })
    this.setState((prevState) => {
			return {
				...prevState, notes
			}
	 	});

  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes:[
          ...prevState.notes,
          {
            id: +new Date(),
            title:title,
            body:body,
            createdAt: new Date(),
            archived: false,
          }
        ]
      }
    });
  }

	onKeywordAddHandler({ keywordSearch }) {
		this.setState((prevState) => {
			return {
				...prevState, keyword:keywordSearch
			}
	 	});
	}

  render() {
		const searchTerm = this.state.keyword.toLowerCase();
		const validNotes = this.state.notes.filter((note) => {
			if (searchTerm === "") {
				return note;
			} else {
				return note.title.toLocaleLowerCase().includes(searchTerm)
			}
		});
    return (
      <div className="note-app">
        <div className="note-app__header">
					<h1>Notes</h1>
					<div className="note-search">
						<NoteSearch keywordSearch={this.state.keyword} addKeyword={this.onKeywordAddHandler}/>
					</div>
				</div>
        <div className="note-app__body">
					<div className="note-input">
						<h2>Buat Catatan</h2>
						<NoteInput addNote={this.onAddNoteHandler}/>
					</div>
					<h2>Catatan Aktif</h2>
					<NoteList notes={validNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} active={true}/>
					<h2>Arsip</h2>
					<NoteList notes={validNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} active={false}/>
				</div>
      </div>
    );
  }
}

export default NoteApp;

