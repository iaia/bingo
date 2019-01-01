import * as React from 'react';
import './App.css';
import History from './History';

class App extends React.Component {
  public render() {
    return (
      <div className="bingo">
        <div className="bingo-main">
          <p>72</p>
        </div>
        <button className="next">Next</button>
        <History />
      </div>
    );
  }
}

export default App;
