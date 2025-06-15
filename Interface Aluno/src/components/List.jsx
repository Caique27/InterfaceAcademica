import React, { useState } from "react";
import Course from "./Course.jsx";

import "./List.css";

function List({ data, requestDisenrollment }) {
  return (
    <div className="List-div">
      <header className="List-header">
        <h1 className="List-titulo">{data.category}</h1>
      </header>

      <p className="List-tarefas">
        {data.courses.map((course) => (
          <Course
            data={course}
            CourseId={course.id}
            requestDisenrollment={requestDisenrollment}
          />
        ))}
      </p>
    </div>
  );
}

export default List;
