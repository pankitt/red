import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {loadIssues} from "./actions";
import {bindActionCreators} from 'redux';

class App extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = props;
        this.boundActionCreators = bindActionCreators({loadIssues}, dispatch);
        console.log(this.boundActionCreators);
    }

  handleClick () {
      let { dispatch } = this.props;
      let action = {loadIssues}.loadIssues();
      dispatch(action);
  }

  render() {
      return (
        <div className="App">
            counter - {this.props.counter} <br/>
            <button onClick={this.handleClick.bind(this)}>Load this issues</button>
            <ul>
                {this.props.issues.map((issue, index) => <li key={index}>{issue.title}</li>)}
            </ul>
        </div>
      );
  }
}

export default connect(
    (state) => {return {counter: state.counter, issues: state.issues}}
)(App);
