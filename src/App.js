import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search/search.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search_query: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
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
          <SearchField
            placeholder='search users'
            handleonchange={e => this.setState({ search_query: e.target.value })} />
          < CardList card_users={filterusers} />
        </header>
      </div>
    );
  }
}

export default App;
