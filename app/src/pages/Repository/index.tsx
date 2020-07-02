import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header, RepositoryInfo } from "./styles";

import logo from "../../assets/logo.svg";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/52306002?s=400&u=355e80892c7829f7e34dd3574947266607d84a5c&v=4"
            alt="Germain Avatar"
          />
        </header>
        <div>
          <strong>{params.repository}</strong>
          <p>Descrição do Repositório</p>
        </div>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
