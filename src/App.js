import logo from './logo.svg';
import './App.css';
import React from 'react';
import { List } from './listitem.js';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasklist: [],
            currtask: ""
        };
    }
    delItem = (e) => {
        var tasks = this.state.tasklist;
        delete tasks[e.target.id];
        this.setState({
            tasklist: tasks
        });
    };
    handleInput = (e) => {
        this.setState({
            currtask: e.target.value
        });
    };
    addItem = (e) => {
        var tasks = this.state.tasklist;
        tasks.push(this.state.currtask);
        document.getElementById('inputfield').value = "";
        this.setState({
            tasklist: tasks
        });
        console.log(this.state.tasklist);
    };
    render() {
        return ( <
            div className = "Container" >
            <
            div className = "inputBox" >
            <
            span >
            <
            input id = "inputfield"
            onKeyUp = { this.handleInput }
            type = "text"
            autoComplete = "off"
            placeholder = "Enter Some Task" / >
            <
            button id = "addbutton"
            onClick = { this.addItem } > Add < /button> < /
            span > <
            /div>  <
            List tasklist = { this.state.tasklist }
            del = { this.delItem }
            /> < /
            div >
        );
    }
}

export default App;