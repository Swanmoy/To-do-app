import React from 'react';
import './App.css';
export function List(props) {
    var tasks = props.tasklist;
    var listp;
    listp = tasks.map((value, index) => {
        return ( <
            div id = "listItem" > < span > < span id = "listtask" > { value } < /span> < button className="delbtn" id = { index }
            onClick = { props.del } > Delete < /button > < /span > < /div >
        );
    });
    return ( <
        div className = "listContainer" > { listp } < /div>
    );
}