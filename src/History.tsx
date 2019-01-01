import * as React from 'react';
import './History.css';

class History extends React.Component {
  public render() {
    return (
      <div className="bingo-history">
        <div className="history-item">
          <p>39</p>
        </div>
        <div className="history-item">
          <p>09</p>
        </div>
      </div>
    );
  }
}

export default History;
