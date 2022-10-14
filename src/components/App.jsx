import {Feedback } from 'components/Feedback/Feedback'
import Statistics from 'components/Statistics/Statistics'
import { Component } from "react";
import Notification from 'components/Notification/Notification'
import Section from 'components/Section/Section'


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  choiceState = (propertyName) => {
    
     this.setState((prevState) => {
      const value = prevState[propertyName];
       return {
        [propertyName]: value + 1 
       };   
    })  
  };

totalFeedback(){
  return this.state.good + this.state.neutral + this.state.bad
 };

 goodPercentage(){
 return Math.round((this.state.good / this.totalFeedback()) * 100)
 };

 render(){
  const options = ['good', 'neutral', 'bad'];
  return (
  <>
  <div>
  <Section title="Please leave feedback">
   <Feedback 
   options={options} 
  choiceState={this.choiceState}
  />

  </Section>
   <Section title="Statistics">
   {this.totalFeedback() ?
     <Statistics good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.totalFeedback()} 
            positivePercentage={this.goodPercentage()}/>
            :
            <Notification message="There is no feedback"/>
          }
    </Section>
  </div>
  </>
  );
};

}
 