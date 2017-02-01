import React, {Component} from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  };

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrease = () => {
    this.setState({
      count: prevState.count - 1
    });
  }

  render() {
    const {start = 0} = this.props;
    return (
      <div>
        The count is: <mark>{this.state.count + start}</mark>
        <div>
          <button onClick={this.increase}>Increase</button>

          <button onClick={this.decrease}>Decrease</button>
        </div>
      </div>
    )
  }

}
