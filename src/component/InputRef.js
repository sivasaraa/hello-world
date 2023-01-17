import React, { Component } from 'react'
import Input from './Input'

class InputRef extends Component {
    constructor() {
        super();
        this.compRef = React.createRef();
    }

    clickHandler = () => {
        this.compRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.compRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default InputRef;