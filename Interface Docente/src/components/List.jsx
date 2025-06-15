import Student from "./Student";

import "./List.css";

function List({ data, approveDisenrollment, updateGrades }) {
  return (
    <div className="List-div">
      <header className="List-header">
        <h1 className="List-titulo">{data.name}</h1>
        <h2 style={{ marginLeft: "1%" }}>({data.days})</h2>
      </header>

      <p className="List-tarefas">
        {data.students.map((student) => (
          <Student
            data={student}
            StudentId={student.id}
            approveDisenrollment={approveDisenrollment}
            updateGrades={updateGrades}
          />
        ))}
      </p>
    </div>
  );
}

export default List;
