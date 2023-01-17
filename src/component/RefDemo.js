import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus();
        console.log("call back ref",this.cbRef);
        if(this.cbRef){
            this.cbRef.focus();
        }
    }

    render() {
        return (<div>
            <input type="text" ref={this.inputRef}/>
            <input type="text" ref={this.setCbRef}/>
        </div>)
    }
}

export default RefDemo