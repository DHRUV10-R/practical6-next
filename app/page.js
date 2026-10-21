
"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent(e) {
    e.preventDefault();

    if (!name.trim() || !course.trim()) return;

    setStudents([
      ...students,
      {
        id: Date.now(),
        name: name.trim(),
        course: course.trim(),
      },
    ]);

    setName("");
    setCourse("");
  }

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <main className="container">
      <h1>Student Information App</h1>
      <p>Built with React.js and Next.js</p>

      <form onSubmit={addStudent} className="student-form">
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter course name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <button type="submit">Add Student</button>
      </form>

      <h2>Student List ({students.length})</h2>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <div className="student-card" key={student.id}>
              <div>
                <h3>{student.name}</h3>
                <p>Course: {student.course}</p>
              </div>

              <button
                className="delete-button"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
