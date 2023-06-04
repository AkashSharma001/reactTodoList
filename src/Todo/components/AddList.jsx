import React from "react";

const AddList = (props) => {
  const { handleAddList, newList, handleOnChange } = props;

  return (
    <>
      <form>
        <input type='text' value={newList.trim()} onChange={handleOnChange} required />
        <button onClick={handleAddList} type='submit'>
          Add List
        </button>
      </form>
    </>
  );
};

export default AddList;
