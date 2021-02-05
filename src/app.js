import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp options={['12/40 Cafe', 'Cafe la flor']} />, document.getElementById('app'));

class OldSyntax {
  constructor(){
    this.name = 'mike',
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting(){
    return `Hi, my name is ${this.name}`
  }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting())

class NewSyntax{
  name = 'Berny';
  getGreeting = () => {
    return `Hi, my name is ${this.name}`
  }
}
const newSyntax = new NewSyntax()
const newGreeting = newSyntax.getGreeting
console.log(newGreeting())