import React, { Component } from 'react';

class Search extends Component {
	render() {
		return (
			<div className='Search'>
				<form>
					<input type='text'></input>
				 	<input type='submit' value='Search'></input>
				</form>
			</div>
		)
	}
}

export default Search;