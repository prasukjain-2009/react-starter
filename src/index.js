import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ytsearch from 'youtube-api-search';

import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetails';

const API_Key = "AIzaSyBCPO5NHrHr4-t76MFk9LRHfAW06jDyWxk";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch("Figaro")
  }

  videoSearch(term) {

    ytsearch({ key: API_Key, term: term}, (videos) => {
      // this.setState({videos});//es6 syntax
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }
  render() {
    return (<div>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
    </div>)
  }
}

//Take this component's generated HTML and put it
// on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));