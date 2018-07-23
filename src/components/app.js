import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addMessages} from '../actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage(e) {
     //console.log(this.state.input);
     e.preventDefault();
    this.props.submitNewMessage(this.state.input);

    this.setState({
      input: ''
    })
  }
  
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button type='submit' onClick={this.submitMessage} >Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {messages: state}
};

function mapDispatchToProps(dispatch){
  return {
    submitNewMessage: function(message) {
      return dispatch(addMessages(message))
    }
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
