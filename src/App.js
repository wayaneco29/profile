import React from 'react';

import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage/homepage.component';


import './App.css';



class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Navigation />
        <Homepage />
      </div>
    );
  }
}

export default App;
