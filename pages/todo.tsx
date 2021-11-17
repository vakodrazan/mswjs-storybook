import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  useQuery,
  gql,
} from "@apollo/client";

const GET_TODOS = gql`
  query GetTodo {
    todos {
      userId
      id
      title
      completed
    }
  }
`;

const Todo: NextPage = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {console.log(error)}</p>;

  return <div>Do things here</div>;
};

export default Todo;
