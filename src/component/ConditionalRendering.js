import React, { Component } from 'react'

class ConditionRendering extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn : false
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome User</div>
    }
}

export default ConditionRendering