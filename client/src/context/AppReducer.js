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

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case MAJORS_GET:
      return { ...state, loading: false, majors: payload };
    case MAJOR_ADD:
      return { ...state, loading: false, majors: [payload, ...state.majors] };
    case MAJOR_EDIT:
      return {
        ...state,
        loading: false,
        // Replace the edit major with payload in the list
        majors: state.majors.map((maj) =>
          maj._id === payload.id ? { ...payload.major } : maj
        ),
      };
    case MAJOR_DELETE:
      return {
        ...state,
        loading: false,
        majors: state.majors.filter((maj) => maj._id !== payload),
      };
    case STUDENTS_GET:
      return { ...state, loading: false, students: payload };
    case STUDENT_GET:
      return { ...state, loading: false, student: payload };
    case STUDENT_ADD:
      return {
        ...state,
        loading: false,
        students: [payload, ...state.students],
      };
    case STUDENT_EDIT:
      return {
        ...state,
        loading: false,
        // Replace the edit student with payload in the list
        students: state.students.map((stu) =>
          stu._id === payload.id ? { ...payload.updatedStudent } : stu
        ),
      };
    case STUDENT_DELETE:
      return {
        ...state,
        loading: false,
        students: state.students.filter((stu) => stu._id !== payload),
      };
    case MAJOR_ERROR:
      return { ...state, loading: false, error: payload };
    case STUDENT_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default reducer;
