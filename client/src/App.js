import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Wall from './Wall';
import './App.css';

ReactDOM.render(
  <Router>
    <Wall />
  </Router>,
  document.getElementById('root')
);
