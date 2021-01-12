import React, { useReducer, createContext, useContext } from "react";
import axios from "axios";

import reducer from "./AppReducer";
import {
  STUDENTS_GET,
  STUDENT_GET,
  STUDENT_ADD,
  STUDENT_EDIT,
  STUDENT_DELETE,
  STUDENT_ERROR,
  MAJORS_GET,
  MAJOR_ADD,
  MAJOR_EDIT,
  MAJOR_DELETE,
  MAJOR_ERROR,
} from "./ActionTypes";

const AppContext = createContext();

const initialState = {
  students: [],
  student: {},
  majors: [],
  major: {},
  loading: true,
  error: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get all majors
  const getMajors = async () => {
    try {
      const { data } = await axios.get("/api/majors");

      dispatch({ type: MAJORS_GET, payload: data });
    } catch (err) {
      dispatch({ type: MAJOR_ERROR, payload: err.message.error });
    }
  };

  // Add a major
  const addMajor = async (majorText) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "/api/majors/create",
        { majorText },
        config
      );

      dispatch({ type: MAJOR_ADD, payload: data });
    } catch (err) {
      dispatch({ type: MAJOR_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Edit major
  const editMajor = async (majId, majorText) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.put(
        `/api/majors/update/${majId}`,
        { majorText },
        config
      );

      dispatch({ type: MAJOR_EDIT, payload: { id: majId, major: data } });
    } catch (err) {
      dispatch({ type: MAJOR_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Delete major
  const deleteMajor = async (majId) => {
    try {
      await axios.delete(`/api/majors/${majId}`);

      dispatch({ type: MAJOR_DELETE, payload: majId });
    } catch (err) {
      dispatch({ type: MAJOR_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Get all students
  const getStudents = async () => {
    try {
      const { data } = await axios.get("/api/students");

      dispatch({ type: STUDENTS_GET, payload: data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: STUDENT_ERROR, payload: err.message.error });
    }
  };

  // Get a single student
  const getStudent = async (stuId) => {
    try {
      const { data } = await axios.get(`/api/students/${stuId}`);

      dispatch({ type: STUDENT_GET, payload: data });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Add a student
  const addStudent = async (formData) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "/api/students/create",
        formData,
        config
      );

      dispatch({ type: STUDENT_ADD, payload: data });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Edit a student
  const editStudent = async (stuId, formData) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.put(
        `/api/students/update/${stuId}`,
        formData,
        config
      );

      dispatch({
        type: STUDENT_EDIT,
        payload: { id: stuId, updatedStudent: data },
      });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Delete student
  const deleteStudent = async (stuId) => {
    try {
      await axios.delete(`/api/students/${stuId}`);

      dispatch({ type: STUDENT_DELETE, payload: stuId });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getMajors,
        addMajor,
        editMajor,
        deleteMajor,
        getStudents,
        getStudent,
        addStudent,
        editStudent,
        deleteStudent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
