import React from 'react';
import './App.css';
import {SearchBox} from './components/searchBox/searchBox';
import {MovieList} from './components/movieList/movieList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchInput: '',
      results: [],
      page: 1
    }
  }

  searchForMovie(title, page){
    fetch(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=c4225771&`).then(response=>response.json())
    .then(response=>  this.setState({results: response.Search, page: page}));
  }

  handleChange(e){
    this.setState({searchInput: e.target.value})
  }

  render(){
    const {searchInput, results, page} = this.state;
    return(
      <div className="App">
        <div className="header">
          <h1>Movie <span>Search Engine</span></h1>
          <SearchBox placeholder="Insert movie title..." handleChange={(e) => this.handleChange(e)} />
          <button className="searchButton" onClick={()=>this.searchForMovie(searchInput, 1)}>Search</button>
        </div>
        {results?.length?
        <div>
         <MovieList results={results}/>
         <div className="navigation">
         {page>1?<button className="navigationButton" onClick={()=>this.searchForMovie(searchInput, page-1)}>Previous page</button>:null}
          <button className="navigationButton" onClick={()=>this.searchForMovie(searchInput, page+1)}>Next page</button>
         </div>
        </div>
        :null}
       </div>
    )
  }
}
export default App;
