import 'react-app-polyfill/ie11';
import 'core-js/fn/array/includes';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/array/find';
import 'core-js/fn/number/is-nan';

import React from 'react'
import { render } from 'react-dom'
import './css/styles.scss'
import App from "./components/App"


render(
  <App />,
  document.getElementById('root')
)
