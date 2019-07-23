import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
  }

  handleChange = event => {
    let name = event.target.value;
    this.setState({ name });
  }

  render(){
    return(
      <form>
        <label>
        Name: 
        <input type="text" name={ this.state.name } onChange={ this.handleChange }></input>
        </label>
        <div># of Updates: { this.state.count }</div>
        <div>This is your name: { this.state.name }</div>
        <button onClick = { this.handleSubmit }>Submit</button>
      </form>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
