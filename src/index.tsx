import './index.css';
import store from './store';
import App from './root/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { render } from 'react-dom'
//import { createStore } from 'redux'
//import reducer from './store/reducers';
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
//   <Provider store={store}>
//       <BrowserRouter>
//         <App/>
//       </BrowserRouter>
//   </Provider>
// );

// const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
