import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Logout from './Logout.jsx';
import Search from './Search.jsx';
import Filters from './Filters.jsx';
import Items from './Items.jsx';
import ItemDetails from './ItemDetails.jsx';
import CreateItem from './CreateItem.jsx';

import { StripeProvider } from 'react-stripe-elements';

import styled from 'styled-components';
import './main.css';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  background: var(--bg-content-color);
`;
const Wrapper2Cols = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  background: var(--bg-content-color);
`;

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.isAlreadyLoggedIn();
  }

  isAlreadyLoggedIn = async () => {
    let response = await fetch('/alreadyLoggedIn', {
      method: 'GET',
      credentials: 'include',
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (!body.success) {
      // alert('NO Loged in');
      return;
    }
    this.props.dispatch({ type: 'LOGIN-SUCCESS' });
  };

  renderHome() {
    return; // <Home />;
    //return <div>Home</div>;
  }
  renderLogin() {
    return <Login />;
  }
  renderSignup() {
    return <Signup />;
  }
  renderCreateItem() {
    return <CreateItem />;
  }
  renderLogout() {
    return <Logout />;
  }

  render = () => {
    if (this.props.loggedIn) {
      let componentsToShow = [];
      componentsToShow.push(
        <div>
          {/* <Search /> */}
          <Filters />
        </div>
      );
      if (this.props.componentToShow === 'items') {
        componentsToShow.push(<Items />);
      } else if (this.props.componentToShow === 'itemDetails') {
        componentsToShow.push(<ItemDetails />);
      } else if (this.props.componentToShow === 'createItem') {
        componentsToShow = [];
        componentsToShow.push(<CreateItem />);
      }

      return (
        <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
          <BrowserRouter>
            <Wrapper>
              <Navbar />
              <Route path="/" exact render={this.renderHome} />
              <Route path="/item/new" exact render={this.renderCreateItem} />
              <Route path="/logout" render={this.renderLogout} />
              <Wrapper2Cols>{componentsToShow}</Wrapper2Cols>
            </Wrapper>
          </BrowserRouter>
        </StripeProvider>
      );
    }

    return (
      <BrowserRouter>
        <Wrapper>
          <Navbar />
          <Route path="/" exact render={this.renderLogin} />
          <Route path="/login" render={this.renderLogin} />
          <Route path="/signup" render={this.renderSignup} />
          <Route path="/logout">
            <Redirect to="/" />
          </Route>
        </Wrapper>
      </BrowserRouter>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    componentToShow: state.componentToShow,
  };
};
export default connect(mapStateToProps)(App);
