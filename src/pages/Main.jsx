import React from "react";
import { Link } from "react-router-dom";
import ProjectTitle from "../components/ProjectTitle";

const Main = () => {
  return (
    <div>
      <ProjectTitle />
      <Link to="/Admin">
        <button>관리자</button>
      </Link>
    </div>
  );
};

export default Main;
