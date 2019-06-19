import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Form from './component/Form.js';

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
