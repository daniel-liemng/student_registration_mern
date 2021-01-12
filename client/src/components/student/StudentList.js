import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const { students, getStudents } = useAppContext();

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const studentList = () => {
    return students.map((curStudent) => {
      return <StudentItem student={curStudent} key={curStudent._id} />;
    });
  };
  return (
    <div style={{ marginTop: "3rem" }}>
      <h3 style={{ marginBottom: "2rem", color: "green" }}>List of Students</h3>
      <Link
        to='/students/add'
        className='btn btn-success'
        style={{ marginBottom: "2rem" }}
      >
        Create a New Student
      </Link>
      <table className='table  table-hover table-success'>
        <thead className='thead-dark'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Major</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{studentList()}</tbody>
      </table>
    </div>
  );
};

export default StudentList;
