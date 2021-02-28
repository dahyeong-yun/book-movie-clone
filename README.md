# 영화 평점 서비스 클론 

- 기본 형태 
  ```javascript
  import React from 'react';
  import PropTypes from 'prop-types';
  // import Potato from './Potato';
  
  const movieLike = [
    {
      id:1,
      name:"Fight Club",
      image : "https://img1.daumcdn.net/thumb/C408x596/?fname=http%3A%2F%2Ft1.  daumcdn.net%2Fmovie%2Ff9b2ca22f865194bc401c01ea0cc11abaa319be4",
      rating : 4.5
    },
    {
      id:2,
      name:"삼진그룹 영어토익반",
      image : "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.  daumcdn.net%2Fmovie%2F9509f8790818777a727c53216cef5c35c60c844c",
      rating : 3.5
    },
    {
      id:3,
      name:"어벤져스 : 엔드게임",
      image : "https://img1.daumcdn.net/thumb/C408x596/?fname=http%3A%2F%2Ft1.  daumcdn.net%2Fmovie%2F5574fb2c20c844629aa9ad1d6043ee851555464908641",
      rating : 4.0
    }, 
  ];
  
  Movie.propType = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
  }
  
  function App() {
    return (
      <div>
        <h1>"Hello"</h1>
        {movieLike.map(renderdMovie)}
      </div>
    );
  }
  
  const renderdMovie = movie => <Movie key={movie.id} name={movie.name}   picture={movie.image} rating={movie.rating}/>; 
  
  // 순서가 아래여도 가능한 듯
  function Movie({name, picture, rating}) { // 구조 분해 할당
    return (
      <div>
        <h2>I like {name}</h2>
        <h4>{rating} / 5.0 </h4>
        <img src={picture} alt={name}/>
      </div>
    )
  }
  
  export default App;
  ```

- Class 형태 
  ```javascript
    import React from 'react';
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      console.log('hello');
    }
  
  
    add = () => {
      // TODO 여기서 setter는 어떻게 정의된 것인지
      // TODO Current 객체는 무엇인지?
      this.setState(current => ({
        count : current.count + 1 
      }));  
    };
  
    minus = () => {
      this.setState(current => ({
        count : current.count - 1 
      }));
    };
  
    state = {
      count : 0 
    };
  
    componentDidMount() {
      console.log('componentDidMount');
    }
    componentDidUpdate() {
      console.log('componentDidUpdate');
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  
    render() {
      console.log('is rendering');
      return (
        <div>
          <h1>This Number is {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
      );
    }
  }

  export default App;
  ```

- `a`가 아닌 `Link` 사용
  - 링크 값을 감싸는 따옴표가 있으면 안된다.
  ```javascript
    <Link to={{ pathname:'/about', state:{fromNavigation:true}}}>About</Link>
  ```