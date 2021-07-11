import React from "react";
import {FaEdit,FaTrash} from 'react-icons/fa';

const List=({items,eitem,removeItem})=>{
    return(<>
    <div className="outer_div">
    {items.map((val)=>{
        const {id,title}=val;
        return(<>
    <div key={id} className="item">
        <li >{title}</li>
        <div>
            <button onClick={()=>eitem(id)}>
                <FaEdit/>
            </button>
            <button onClick={()=>removeItem(id)}>
                <FaTrash/>
            </button>
        </div>
    </div>
        </ >)
    })}
    </div>
    </>)
}

export default List;