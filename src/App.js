import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import Results from './components/Reaults'
import './App.css'
const localDataPosts = require('./data.json');

class App extends Component {

state={
  searchingString : ''
}
changeSearchingString= (text) => {
  this.setState({searchingString: text})
}
  render() {
    return (
      <div className="App">
        <div className="search-field">
          <SearchBar searchingString={this.changeSearchingString}/>
          <Results arrayPosts={this.props.arrayPosts} searchingString={this.state.searchingString}/>
        </div>
      </div>
    );
  }
}
App.defaultProps = {
  arrayPosts: localDataPosts
}

export default App;
