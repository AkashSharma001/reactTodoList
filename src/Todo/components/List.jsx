import React from "react";
import "./List.css";

const List = (props) => {
  const { lists, deleteHandler } = props;
  return lists.length !== 0 ? (
    lists.map((list, index) => {
      return (
        <div className='list-container'>
          <h1>{list}</h1>
          <button style={{margin:"20px"}} onClick={(e) => deleteHandler(e, index)}>Delete </button>
        </div>
      );
    })
  ) : (
    <h1>No list available</h1>
  );
};

export default List;
