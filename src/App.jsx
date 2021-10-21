import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
