import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search_query: ''
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }
  render() {
    const { users, search_query } = this.state
    const filterusers = users.filter(user =>
      user.name.toLowerCase().includes(search_query.toLowerCase())
    );

    return (
      <div className="App">
        <header className="App-header">
          <input
            type='text'
            placeholder='search users'
            onChange={e => this.setState({ search_query: e.target.value })} />
          < CardList card_users={filterusers} />
        </header>
      </div>
    );
  }
}

export default App;
