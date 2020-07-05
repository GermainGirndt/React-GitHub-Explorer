import React, { useState, useEffect, FormEvent } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { Title, Form, Repositories, Error } from "./styles";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

// We just need to include the fields of an object which we're gonna use
interface Repository {
  full_name: string;
  description: string;
  owner: { login: string; avatar_url: string };
}

const Dashboard: React.FC = () => {
  //state for storing input's value
  const [newRepo, setNewRepo] = useState(``);

  const [inputError, setInputError] = useState("");

  const [repositories, setRepositories] = useState<Array<Repository>>(() => {
    const storedRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );

    return storedRepositories ? JSON.parse(storedRepositories) : [];
  });

  // always set items to local storage by repository when repositories' state change
  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);
  // Should:
  // Add new repositories
  // Access GitHub's API
  // Save new repository on state

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    console.log(newRepo);

    if (!newRepo) {
      setInputError("Enter the author/repositories' name");
      return;
    }
    // for not loading the page

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      console.log(response.data);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError("Error. Could not find repository.");
    }
  }

  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore GitHub Repositories</Title>

      <Form
        hasError={Boolean(inputError)}
        onSubmit={handleAddRepository}
        action="#"
      >
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Enter the repository's name"
        />
        <button type="submit">Search</button>
      </Form>

      {/* Error is showed if inputError is not empty */}
      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
