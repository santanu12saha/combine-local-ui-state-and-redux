import React, { Component } from 'react';
import classes from './App.css';

class App extends Component {
  render(){
    return (
      <div className={classes.App}>
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
        </ol>
      </div>
    );
  }
}

export default App;
