import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import "../students/css/student.css";
import StudentHeader from "./StudentHeader";

function Student() {
  return (
    <div className="quora">
      <StudentHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Student;
