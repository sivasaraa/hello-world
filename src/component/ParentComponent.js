import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor() {
        super()
        this.state = {
            msg : 'Parent Component'
        }
    }

    greetParent = (child) => {
        alert(`Hello ${this.state.msg} from ${child}`)
    }

    render() {
        return (<div>
            <ChildComponent greetHandler={this.greetParent}/>
        </div>)
    }
}

export default ParentComponent