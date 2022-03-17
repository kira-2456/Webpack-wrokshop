import React, {useEffect, useState} from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

const LoadingComponent = () => <h3>please wait...</h3>;

const AsyncHomeComponent = Loadable({
  loading: () => <LoadingComponent />,
  loader: () => import('../components/HomeComponent'),
});

const AsyncContactComponent = Loadable({
  loading: () => <LoadingComponent />,
  loader: () => import('../components/ContactComponent'),
});

const AsyncAboutComponent = Loadable({
  loading: () => <LoadingComponent />,
  loader: () => import('../components/AboutComponent'),
});


// create sample App component
class App extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <div className="menu">
            <Link exact to="/" activeClassName="active">Home</Link>
            <Link exact to="/about" activeClassName="active">About</Link>
            <Link exact to="/contact" activeClassName="active">Contact</Link>
          </div>

          <Switch>
            <Route exact path="/" component={ AsyncHomeComponent } />
            <Route exact path="/about" component={ AsyncAboutComponent } />
            <Route exact path="/contact" component={ AsyncContactComponent } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// const App = () => {
//   return <div>Hello</div>
// }
export default App;
