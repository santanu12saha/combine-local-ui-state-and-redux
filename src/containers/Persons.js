import React, { Component } from 'react';
import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';

class Persons extends Component {

    state = {
        persons: []
    }

    onAddedPerson = (name, age) => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: name,
            age: age
        }
        const persons = [...this.state.persons];
        persons.push(newPerson);
        this.setState({persons: persons});
    }

    onRemovedPerson = (id) => {
        const persons = [...this.state.persons];
        this.setState({
            persons: persons.filter(person => person.id !== id)
        })
    }

    render() {
        return(
            <div>
                <AddPerson personAdded={(name, age) => this.onAddedPerson(name, age)}/>
                {this.state.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        clicked={() => this.onRemovedPerson(person.id)} />
                ))}
            </div>
        );
    }
}

export default Persons;