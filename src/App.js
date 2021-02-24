import React from 'react';

class App extends React.Component {
  state = {
    isLoading : true,
    movie : []
  };
  
  componentDidMount() {
     setTimeout(() => {
       this.setState({isLoading:false});
     }, 1000);
  }

  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loading...' : 'Me are ready'} </div>;
  }
}
export default App;