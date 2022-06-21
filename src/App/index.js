import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

const LoadingComponent = () => <h3>please wait...</h3>;

const AsyncContactComponent = Loadable({
  loading: () => <LoadingComponent />,
  loader: () => {
    import('../components/ContactComponent').then(() => {
      import('../components/ProfileComponent').then(() => {
        import('../components/AboutComponent').then(() => import('../components/HomeComponent'))
      })
    })
  },
});
//
// const AsyncProfileComponent = Loadable({
//   loading: () => <LoadingComponent />,
//   loader: () => import('../components/ProfileComponent'),
// });
//
// const AsyncAboutComponent = Loadable({
//   loading: () => <LoadingComponent />,
//   loader: () => import('../components/AboutComponent'),
// });
//
// const AsyncHomeComponent = Loadable({
//   loading: () => <LoadingComponent />,
//   loader: () => import('../components/HomeComponent'),
// });


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
            <Link exact to="/profile" activeClassName="active">Profile</Link>
          </div>

          <Switch>
            <Route exact path="/" component={ AsyncContactComponent } />
            <Route exact path="/about" component={ AsyncContactComponent } />
            <Route exact path="/profile" component={ AsyncContactComponent } />
            <Route exact path="/contact" component={ AsyncContactComponent } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
