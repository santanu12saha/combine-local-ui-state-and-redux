import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';
import * as actionTypes from '../store/actions';


class Persons extends Component {

    render() {
        return(
            <div>
                <AddPerson personAdded={this.props.onAddedPerson}/>
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        clicked={() => this.props.onRemovedPerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Persons);