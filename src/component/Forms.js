import React, { Component } from 'react'

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            username : '',
            comments : '',
            opt : 'React' 
        }
    }

    handleTextChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleSelectChange = (event) => {
        this.setState({
            opt : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.opt}`)
        event.preventDefault()
    }

    render() {
        const {username,comments,opt} = this.state;
        return (<form>
            <div>
                <label>UserName</label>
                <input type='text' value={username} onChange={this.handleTextChange}/>
            </div>
            <div>
                <label>Commets</label>
                <textarea value={comments} onChange={this.handleCommentsChange}/>
            </div>
            <div>
                <select value={opt} onChange={this.handleSelectChange}>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='Vue'>Vue</option>
                </select>
            </div>
            <div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        </form>)
    }
}

export default Forms;