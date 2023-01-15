import React, { Component } from 'react'

class ClickCountTwo extends Component {
    
    render() {
        const {count,incrementCount} = this.props
        return <button onClick={incrementCount}>clicked {count} times</button>
    }
}

export default ClickCountTwo