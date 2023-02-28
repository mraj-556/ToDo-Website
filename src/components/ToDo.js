import React from 'react';
import './todo.css';

const ToDo = (props) => {
    return (
        <>
            <div className="todo">
                <li>{props.text}</li>
                <button onClick={()=>{
                    props.onSelect(props.id);
                }}>Remove</button>
            </div>
        </>
    );
}

export default ToDo;