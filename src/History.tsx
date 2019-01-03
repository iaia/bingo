import * as React from 'react';
import './History.css';

interface IHistoryProps {
  histories: number[];
}

class History extends React.Component<IHistoryProps, any> {
  constructor(props: IHistoryProps) {
    super(props);
  }

  public render() {
    const historiesHtml = this.props.histories.map((history, index) =>
      <div key={index} className="history-item">
        <p>{history}</p>
      </div>
    );
    return (
      <div className="bingo-history">
        {historiesHtml}
      </div>
    );
  }
}

export default History;
