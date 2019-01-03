import * as React from 'react';
import './App.css';
import History from './History';

interface IBingoState {
  histories: number[];
  nowNumber: number;
  survivors: number[];
}

class App extends React.Component<any, IBingoState> {
  constructor(props: any) {
    super(props);
    this.state = {
      histories: [],
      nowNumber: -1,
      survivors: this.shuffle(Array(100).fill(null).map((_, index) => index)),
    }
    this.setNextNumber = this.setNextNumber.bind(this);
  }

  public render() {
    return (
      <div className="bingo">
        <div className="bingo-main">
          <p>{this.state.nowNumber}</p>
        </div>
        <button className="next" onClick={this.setNextNumber} disabled={!this.state.survivors.length}>Next</button>
        <History histories={this.state.histories} />
      </div>
    );
  }

  private setNextNumber(event: any) {
    const n = this.state.survivors[0];
    this.state.survivors.shift();
    this.setState({
      histories: [n].concat(this.state.histories),
      nowNumber: n,
      survivors: this.state.survivors,
    });
  }

  private shuffle(array: number[]): number[] {
    for(let i = array.length - 1; i > 0; i--){
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }
}

export default App;
