import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  getMoives = async () => {
    const {
      data:{
        data: { movies }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading : false})
  }
  
  componentDidMount() {
    this.getMoives();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">'Loading...'</span>
          </div> 
          ) : (
          <div class="movies"> 
            {movies.map((moive) => (
              <Movie
                key={moive.id}
                id={moive.id}
                year={moive.year}
                title={moive.title}
                summary={moive.summary}
                poster={moive.medium_cover_image}
              />
            ))}
          </div>
          )} 
      </section>
    );
  }
}
export default App;