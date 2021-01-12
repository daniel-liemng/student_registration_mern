import React from "react";

const About = () => {
  return (
    <div className='container' style={{ marginTop: "3rem", maxWidth: "50rem" }}>
      <div className='jumbotron'>
        <h2 style={{ color: "green", textAlign: "center" }}>About</h2>
        <p>
          This is a simple MERN stack web app to register a student with
          optional selection of majors.
        </p>
        <p>
          Using React, Node, Express and MongoDB Atlas, React Hooks, useReducer
          and Bootstrap.
        </p>
        <p>
          Infomation of all students and majors are from MongoDB Atlas database.
        </p>
        <p>User can view, add, edit and delete major</p>
        <p>
          User can view, create, update and delete a student with the optional
          selection of majors.
        </p>
      </div>
    </div>
  );
};

export default About;
