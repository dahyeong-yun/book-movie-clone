import React from 'react';
// import Potato from './Potato';

function App() {
  return (
    <div>
      <h1>"Hello"</h1>
      <Movie fav="Fight Club"/>
    </div>
  );
}

// 순서가 아래여도 가능한 듯
function Movie({fav}) { // 구조 분해 할당
  return <h1>I like {fav}</h1>
}

export default App;
