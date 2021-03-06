import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state={
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

	onTitleChangeEventHandler(event) {
    if (50 > this.state.title.length){
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value,
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value.slice(0, 50)
        }
      })
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">Sisa karakter : {50 - this.state.title.length}</p>
        <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required></input>
        <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;