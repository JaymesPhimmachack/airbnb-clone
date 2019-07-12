import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class Layout extends React.Component {
  state = {
    authenticated: false,
  }
  componentDidMount() {
   /* fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })*/
  }
  renderLinks = () => {
     //const { authenticated } = this.state;
     
   /* if(authenticated){
      return (
        <span>
          <li className="nav-item">
            <a className="nav-link" href="/">My Listings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`/login?redirect_url=${window.location.pathname}`}>My Trips</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`/login?redirect_url=${window.location.pathname}`}>Sign out</a>
          </li>
        </span>
      );
    }else {
      return (
        <span>
          <li className="nav-item">
            <a className="nav-link" href="/">Sign up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`/login?redirect_url=${window.location.pathname}`}>Log in</a>
          </li>
        </span>
      );
    }*/
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
              {/* this.renderLinks()*/ }
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