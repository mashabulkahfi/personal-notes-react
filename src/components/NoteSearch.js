import React from 'react';

class NoteSearch extends React.Component {
	constructor(props) {
		super(props);

		//inisialisasi state
		this.state = {
			keywordSearch: '',
		}
		this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);
	}

	onKeywordChangeEventHandler(event) {
		this.setState({
			keywordSearch: event.target.value,
		});
		this.props.searchKeyword({ keywordSearch: event.target.value.toLowerCase() });
	}

	render() {
		return (
			<input type="text" placeholder="Cari catatan ..." value={this.state.keywordSearch} onChange={this.onKeywordChangeEventHandler}></input>
		);
	}
}

export default NoteSearch;