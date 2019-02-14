import React, { Component } from 'react';
import './App.css';
import Contact from './components/contacts/Contact';
import Header from './components/layout/Header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact'


class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header />
        <AddContact />
        <Contacts />
      </div>
      </Provider>
    );
  }
}

export default App;
