import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class Layout extends React.Component {
  state = {
    authenticated: false,
    user_id: null
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(response => {
        this.setState({
          authenticated: response.authenticated,
          user_id: response.user_id,
        })
      })
  }

  handleLogout = () => {

    fetch('/api/sessions', safeCredentials({
        method: 'DELETE'
      }))
      .then(handleErrors)
      .then(() => {
        fetch('/api/authenticated', safeCredentials({
            method: 'GET'
          }))
          .then(handleErrors)
          .then(response => {
            this.setState({
              authenticated: response.authenticated,
            })
            if (!response.authenticated) {
              if (window.location.pathname !== '/') {
                window.location.replace("/");
              }
            }
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  };

  renderLinks = () => {
    const { authenticated, user_id } = this.state;

    if (authenticated) {
      return (
        <span>
          <li className="nav-item">
            <a className="nav-link" href={`/listings/${user_id}`}>My Listings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`/trips/${user_id}`}>My Trips</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={this.handleLogout}>Sign out</a>
          </li>
        </span>
      );
    }
    else {
      return (
        <span>
          <li className="nav-item">
            <a className="nav-link" href="/login/signup">Sign up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login/login">Log in</a>
          </li>
        </span>
      );
    }
  }

  render() {

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a href="/"><span className="navbar-brand mb-0 h1 text-danger">Airbnb</span></a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              { this.renderLinks() }
            </ul>
          </div>
        </nav>
        {this.props.children}
        <footer className="p-3 bg-light">
          <div>
            <p className="mr-3 mb-0 text-secondary">Airbnb Clone</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Layout;
