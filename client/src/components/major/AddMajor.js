import React, { useState, useEffect } from "react";

import { useAppContext } from "../../context/AppContext";

// For Add and Edit Major Component
const AddMajor = ({ editableMajor, edit, setEdit }) => {
  const { addMajor, editMajor } = useAppContext();

  const [majorText, setMajorText] = useState("");

  useEffect(() => {
    // Fill input with majorText to be edited
    if (edit) setMajorText(editableMajor.major);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  const handleAddOrEditMajor = (e) => {
    e.preventDefault();

    if (!edit) {
      addMajor(majorText);
    } else {
      editMajor(editableMajor._id, majorText);
      setEdit(false);
    }

    setMajorText("");
  };

  return (
    <div>
      <h3 style={{ color: "green" }}>
        {edit ? "Update" : "Create"} a New Major
      </h3>
      <form onSubmit={handleAddOrEditMajor}>
        <div className='form-group'>
          <label>Major</label>
          <input
            type='text'
            required
            className='form-control'
            value={majorText}
            onChange={(e) => setMajorText(e.target.value)}
          />
        </div>
        <div className='d-flex'>
          <div className='form-group' style={{ marginRight: "0.5rem" }}>
            <input
              type='submit'
              value={`${edit ? "Update" : "Create"} Major`}
              className='btn btn-success'
            />
          </div>
          {edit && (
            <div className='form-group'>
              <button
                type='button'
                onClick={() => {
                  setEdit(false);
                  setMajorText("");
                }}
                className='btn btn-secondary'
              >
                Cancel Update
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddMajor;
