import React from 'react';
import ReactDOM from 'react-dom';
import Screen from 'components/Screen';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
ReactDOM.render(<Screen page="home" />, document.querySelector('#mainScreen'));
