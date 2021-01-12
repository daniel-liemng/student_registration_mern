import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

const AddStudent = () => {
  const { majors, addStudent } = useAppContext();

  const history = useHistory();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: 0,
    major: "",
    email: "",
    phone: "",
  });

  const { firstname, lastname, age, major, email, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();

    addStudent(formData);

    setFormData({
      firstname: "",
      lastname: "",
      age: 0,
      major: "",
      email: "",
      phone: "",
    });

    history.push("/");
  };

  return (
    <div className='container' style={{ marginTop: "3rem", maxWidth: "40rem" }}>
      <h3 style={{ marginTop: "3rem", marginBottom: "2rem", color: "green" }}>
        Create a New Student
      </h3>
      <form onSubmit={handleAddStudent}>
        <div className='form-group'>
          <label>First Name</label>
          <input
            type='text'
            required
            className='form-control'
            name='firstname'
            value={firstname}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Last Name</label>
          <input
            type='text'
            required
            className='form-control'
            name='lastname'
            value={lastname}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Age</label>
          <input
            type='number'
            required
            className='form-control'
            name='age'
            value={age}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Major</label>
          <select
            required
            className='form-control'
            name='major'
            value={major}
            onChange={handleChange}
          >
            <option value='' disabled>
              Selec a major
            </option>
            {majors.map((item) => (
              <option value={item._id} key={item._id}>
                {item.major}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            required
            className='form-control'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Phone</label>
          <input
            type='text'
            required
            className='form-control'
            name='phone'
            value={phone}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='submit'
            value='Create Student'
            className='btn btn-success'
          />{" "}
          <Link to='/' className='btn btn-secondary'>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
