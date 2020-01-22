import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable';
import Image from './components/Image';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      actorsContacts: contacts.slice(0,5),
      keysArr: ['Picture', 'Name', 'Popularity'],
    }

  }

  addContact() {
    let contactsLen = contacts.length;
    let randomPos = Math.floor(Math.random() * (contactsLen + 1));
    let newActor = contacts[randomPos];
    let copyContacts = [...this.state.actorsContacts];
    copyContacts.push(newActor);
    
    // console.log(contactsLen);
    // console.log(randomPos);

    this.setState({
      actorsContacts: copyContacts
    })
  }

  render() {
    // let keysArr =  Object.keys(this.state.fiveContacts[0]);
    // let imgUrl = keysArr.splice(1,1);
    // keysArr.unshift(...imgUrl);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <button onClick={() => this.addContact()}>Add Random Contact</button>
        <div className="divTable">

          <ContactsTable keysArr={this.state.keysArr} actorsContacts={this.state.actorsContacts} />
          
        </div>
      </div>
      );
    }
  }

export default App;


  
