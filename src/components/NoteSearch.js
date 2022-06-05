import React from 'react';

function NoteSearch({ keywordSearch, searchKeyword }){
	function onKeywordChangeEventHandler(event){
		searchKeyword({ keywordSearch: event.target.value });
	}

	return (
		<input type="text" placeholder="Cari catatan ..." value={keywordSearch} onChange={onKeywordChangeEventHandler}></input>
	);
}

// class NoteSearch extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);
// 	}

// 	onKeywordChangeEventHandler(event) {
// 		// this.setState({
// 		// 	keywordSearch: event.target.value,
// 		// });
// 		this.props.searchKeyword({ keywordSearch: event.target.value.toLowerCase() });
// 	}

// 	render() {
// 		return (
// 			<input type="text" placeholder="Cari catatan ..." value={this.props.keywordSearch} onChange={this.onKeywordChangeEventHandler}></input>
// 		);
// 	}
// }

export default NoteSearch;