import React from 'react'
import Person from './Person';

function ListRendering() {
    const persons = [{
        id : 1,
        name : "Charles",
        age: 25
    },
    {
        id : 2,
        name:"Jonathan",
        age: 21
    },
    {
        id : 3,
        name:"Tim",
        age: 23
    }]
    const personsList = persons.map(person => <Person key={person.id} person={person}/>)
    return (<div>{personsList}</div>);
}

export default ListRendering;