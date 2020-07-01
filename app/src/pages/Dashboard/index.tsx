import React from "react";
import logo from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";
import { FiChevronRight } from "react-icons/fi";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore GitHub Repositories</Title>

      <Form action="">
        <input placeholder="Enter the repository's name:" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52306002?s=460&u=355e80892c7829f7e34dd3574947266607d84a5c&v=4"
            alt="Germain GitHub"
          />
          <div>
            <strong>Germain/TodayILearned</strong>
            <p>A repository with brief notes to programming.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52306002?s=460&u=355e80892c7829f7e34dd3574947266607d84a5c&v=4"
            alt="Germain GitHub"
          />
          <div>
            <strong>Germain/TodayILearned</strong>
            <p>A repository with brief notes to programming.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52306002?s=460&u=355e80892c7829f7e34dd3574947266607d84a5c&v=4"
            alt="Germain GitHub"
          />
          <div>
            <strong>Germain/TodayILearned</strong>
            <p>A repository with brief notes to programming.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
