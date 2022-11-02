import { Component } from 'react';
import { FeedbackOptions } from './Feetback/FeetbackOptions';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeetback = event => {
    if (event === 'good') {
      this.setState({ good: this.state.good + 1 });
    } else if (event === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    } else if (event === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.bad + this.state.neutral;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          incrementFeetback={this.incrementFeetback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
