import React, { Component } from 'react'
import FeedbackBtns from './components/feedbackButtons'
import FeedbackStatistics from './components/feedbackStatistics'
import Section from './components/section'
import Notification from './components/notificationMessage'

class App extends Component{


  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  
  
   onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad
    return total
} 
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0
  }

  
  render() {
    const totalFeedbackAmount = this.countTotalFeedback()
    const {good,neutral,bad}=this.state
    return (<>
      <Section title ='Please, leave yor Feedback!'>

      <FeedbackBtns options={this.state}
        onLeaveFeedback={this.onLeaveFeedback }/>
      </Section>

      <Section title='Statistics'>

        {totalFeedbackAmount === 0 ? <Notification message='No feedback given' /> :
      <FeedbackStatistics good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedbackAmount}
        percent ={this.countPositiveFeedbackPercentage()}
       />}
      </Section>
      </>
    )
  }
}

export default App;
