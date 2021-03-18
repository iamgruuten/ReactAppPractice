import React, { Component } from 'react'
import './App.css';
import { Person } from './Person/Person'
import Radium, { StyleRoot } from 'radium';



class App extends Component {

  
  state = {
    persons: [
      {id: 1, name: 'Steven', age: 22},
      {id: 2, name: 'Alex', age: 21},
      {id: 3, name: 'Kenny', age: 21}],
      showPerson: true,
  }

  toggleShowHide = () => {
  const toggle = {...this.state, showPerson: !this.state.showPerson}

    this.setState(toggle)
  }

  render() {

    const style = {
      backgroundColor: 'white',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'red',
        color: 'black'
      }
    };

    const nameHandler = (newName, id) => {
      const newPeople = {persons: this.state.persons.map(person => 
          person.id !== id ? person : {...person, name: newName})}

      console.log(newPeople) 

      this.setState(newPeople)
      
      console.log(this.state.persons) 
    }
  
    return (
      <StyleRoot>
      <div>
        {
      this.state.showPerson &&
          this.state.persons.map((person) => {
              return (
                <div>
                    <Person id={person.id} name={person.name} age={person.age} onChange={(event) => nameHandler(event.target.value, person.id)} />
                </div>
              )

          })
        }
          <button style={style} onClick={this.toggleShowHide}>Toggle Show/Hide</button>
          </div>
          </StyleRoot>
    );
    
    
  }
}

export default Radium(App)

//Above it is using createElement which is

export class AppCC extends Component {
  render(){
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This uses createElement but do not follow this practice"))
  }
}

//Here is another way

export const AppAlt = () => {
  return (
    <div>
      <h1>This is a function component</h1>
      <p>This is really working!</p>
    </div>
  )
}


//Here is a shorter way

export const AppAltShort = () => <h1>This is a shorter component</h1> 


//JSX Restriction
//The reason why is className to replace class for the html tag because class is a reserved word to create a class
//JSX must only have one root element