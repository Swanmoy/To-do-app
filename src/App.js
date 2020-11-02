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
        e.preventDefault();
        var tasks = this.state.tasklist;
        if (this.state.currtask != "") {
            tasks.push(this.state.currtask);
        }
        document.getElementById('inputfield').value = "";
        this.setState({
            tasklist: tasks,
            currtask: ""
        });
        console.log(this.state.tasklist);
    };
    render() {
        return ( <
            div className = "Container" >
            <
            form onSubmit = { this.addItem } >
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
            type = "submit"
            onClick = { this.addItem } > Add < /button> < /
            span > <
            /div>  <
            List tasklist = { this.state.tasklist }
            del = { this.delItem }
            />  < /
            form > < /
            div >
        );
    }
}

export default App;