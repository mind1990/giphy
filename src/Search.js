import React, { Component } from 'react';

class Search extends Component {
 
 	handleSearchSubmit(event) {
	  event.preventDefault();
	  console.log('search!')
	}

 	render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSearchSubmit}>
          <input type="text" ref={(input) => this.textInput = input} />
          <button>Search</button>
        </form>
      </div>
    );
	}
}

export default Search;