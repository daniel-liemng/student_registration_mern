import React, { useState } from "react";

import AddMajor from "./AddMajor";
import { useAppContext } from "../../context/AppContext";

const MajorList = () => {
  const { majors, deleteMajor } = useAppContext();

  // For edit
  // Get major info from list and edit status
  const [editableMajor, setEditableMajor] = useState({});
  const [edit, setEdit] = useState(false);

  // Set major obj and status for editing
  const handleEdit = (major) => {
    setEditableMajor(major);
    setEdit(true);
  };

  const Major = ({ major }) => (
    <tr>
      <td>{major.major}</td>
      <td>
        <button
          className='btn btn-light btn-sm'
          onClick={() => handleEdit(major)}
        >
          edit
        </button>{" "}
        <button
          className='btn btn-light btn-sm'
          onClick={() => deleteMajor(major._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );

  const majorList = () => {
    return majors.map((curMajor) => {
      return <Major major={curMajor} key={curMajor._id} />;
    });
  };

  return (
    <div className='container' style={{ marginTop: "3rem", maxWidth: "40rem" }}>
      <AddMajor editableMajor={editableMajor} edit={edit} setEdit={setEdit} />
      <hr />
      <h3 style={{ marginBottom: "2rem", color: "green" }}>List of Majors</h3>
      <table className='table table-success table-hover'>
        <thead className='thead-dark'>
          <tr>
            <th>Major</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{majorList()}</tbody>
      </table>
    </div>
  );
};

export default MajorList;
