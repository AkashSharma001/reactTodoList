import React, {  useState } from "react";
import List from "./components/List";
import AddList from "./components/AddList";

const Todo = () => {
  const [lists, setList] = useState(["Eat", "Learn", "Shop"]);
  const [newList, setNewList] = useState("");

  const handleOnChange = (e) => {
    // Update the state with the new input value
    setNewList(e.target.value);
  };
  
  const handleAddList = (e) => {
    e.preventDefault();
    // Add the new list item to the existing list if the input is not empty
    if (newList.trim() !== "") {
      setList([...lists, newList]);
    }
    // Clear the input field after adding the list
    setNewList("");
  };
  
  
  const handleDeleteList = (e, index) => {
    e.preventDefault();
    // Filter out the list item at the specified index and create a new array
    const deleteList = lists.filter((list, i) => i !== index);
    // Update the list state with the new array without the deleted item
    setList(deleteList);
  };
  

  return (
    <>
      <List lists={lists} deleteHandler={handleDeleteList} />
      <AddList handleAddList={(e)=>handleAddList(e)} newList={newList} handleOnChange={handleOnChange}/>
    </>
  );
};

export default Todo;
