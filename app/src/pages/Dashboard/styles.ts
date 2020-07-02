import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #d7d7d7;
    border-radius: 20px 0 0 20px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &:placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    background: #04d361;
    border: 20px;
    border-radius: 0 20px 20px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.7s;

    &:hover {
      background: ${shade(0.2, "#00c957")};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    align-items: center;
    display: flex;
    transition: transform 0.2s;

    /* when there's at least one 'a' element (anchor tag) BEFORE 'a' */
    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0px 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #888893;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
