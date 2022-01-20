import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const listItems = props.items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <span>
            <input type="checkbox" name={item.key} checked={item.completed} id={item.key} onChange={(e)=>{
                props.completeTask(item.key)}}/>
            <label htmlFor={item.key} style={{textDecoration: item.completed ? 'line-through': 'none'}}>{item.text}</label>
        </span>
        <span>
            <FontAwesomeIcon className="faicons" onClick={() => {
                props.deleteItem(item.key)
            }} icon="trash" />
        </span>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
            {listItems}
        </FlipMove>
    </div>;
  }

  export default ListItems;