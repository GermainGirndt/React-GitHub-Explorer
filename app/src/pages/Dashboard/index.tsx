import React, { useState, FormEvent } from "react";
import logo from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";
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

  const [repositories, setRepositories] = useState<Array<Repository>>([]);

  // Should:
  // Add new repositories
  // Access GitHub's API
  // Save new repository on state

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    // for not loading the page
    event.preventDefault();
    console.log(newRepo);

    const response = await api.get<Repository>(`repos/${newRepo}`);
    console.log(response.data);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo("");
  }

  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore GitHub Repositories</Title>

      <Form onSubmit={handleAddRepository} action="#">
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Enter the repository's name:"
        />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
