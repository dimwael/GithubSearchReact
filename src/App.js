import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Users from './components/users/Users.js';
import User from './components/users/User.js';
import Search from './components/users/Search.js';
import Alert from './components/layout/Alert.js';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {},
      loading: false,
      alert: null,
      response: false
    }

  }


  // Search Github Users
  searchUsers = async text => {

    this.setState({ loading: true });
    //console.log(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}`);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    //console.log(res.data);
    this.setState({ users: res.data.items });
    this.setState({ loading: false });
  };



  // Get a single user
  searchOneUser = async username => {

    this.setState({ loading: true });
    //console.log(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=
    //${ process.env.REACT_APP_GITHUB_CLIENT_SECRET } `)
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=
    ${ process.env.REACT_APP_GITHUB_ID}& client_secret=
    ${ process.env.REACT_APP_GITHUB_CLIENT_SECRET} `)

    console.log(res.data);
    this.setState({ user: res.data });
    this.setState({ loading: false });

  }
  ClearUsers = () => {
    console.log('rere');
    this.setState({ users: [], loading: false });
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUsers={this.ClearUsers} showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert} />
                  <Users loading={this.state.loading} users={this.state.users} />
                </Fragment>

              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props => (
                <User {...props}
                  getUser={this.searchOneUser}
                  user={this.state.user} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
