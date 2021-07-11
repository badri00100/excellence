import React, { useEffect, useState } from "react";
import Alert from "./alert";
import List from "./list";

const getlocalstore=()=>{
  let list=localStorage.getItem('lis');
  if(list){
    return JSON.parse(localStorage.getItem('lis'))
  }else{
    return [];
}
}

const Card = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getlocalstore());
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: true, msg: "", type: "" });

                                                          //ONSUBMIT

  const form_sub = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({
        show: true,
        msg: "please enter value",
        type: "yellow",
      });
    } else if (name && isEditing) {
      const newitem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newitem]);
      setName("");
      setIsEditing(false)
    } else {
      const newitem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newitem]);
      setName("");
      setAlert({
        msg: "Your item is added",
        type: "blue",
      });
      setTimeout(() => {
        setAlert({
          msg: "",
          type: "",
        });
      }, 3000);
    }
  };
  const onKeyEnter=(e)=>{
    if (!name) {
      setAlert({
        show: true,
        msg: "please enter value",
        type: "yellow",
      });
    } else if (name && isEditing) {
      const newitem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newitem]);
      setName("");
      setIsEditing(false)
    } else {
      const newitem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newitem]);
      setName("");
      setAlert({
        msg: "Your item is added",
        type: "blue",
      });
      setTimeout(() => {
        setAlert({
          msg: "",
          type: "",
        });
      }, 3000);
    }
  }
                                                  // ON CLEAR ALL BOTTON
  const clritem = () => {
    setList([]);
    setAlert({
      msg: "the list is empty",
      type: "red",
    });
    setTimeout(() => {
      setAlert({
        msg: "",
        type: "",
      });
    }, 3000);
  };
                                                   //LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('lis',JSON.stringify(list))
  }, [list])
                                                           //ON EDIT ITEM
  const eitem = (id) => {
    const edit_data = list.find((item) => id === item.id);
    setName(edit_data.title);
    setAlert({ msg: "Edit your item", type: "#63ff5d" });
    setList(list.filter((item) => item.id !== id));
    setIsEditing(true);
    setTimeout(() => {
      setAlert({
        msg: "",
        type: "",
      });
    }, 3000);
  };
                                                          //ON REMOVE
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    setAlert({ msg: "you deleted a item", type: "pink" });
    setTimeout(() => {
      setAlert({
        msg: "",
        type: "",
      });
    }, 3000);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={form_sub}>
          <h2 className="heading">To-Do-List</h2>
          {/* <h4>{alert.show && <Alert />}</h4> */}
          <Alert {...alert} />
          <input
            className='inputval'
            placeholder="e.g apple"
            maxLength="40"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                   onKeyEnter();
                }
              }}
          />
          <button className="subbtn" type="submit">{isEditing ? "Edit" : "Submit"}</button>
        </form>
        <List items={list} removeItem={removeItem} eitem={eitem} />
        <button onClick={clritem} onenter className='clrbtn'>Clear all</button>
      </div>
      </>
  );
};

export default Card;
