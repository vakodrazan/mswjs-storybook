import { Meta } from '@storybook/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { graphql } from 'msw';
import Todo from '../pages/todo';

export default {
  title: 'Apollo',
  component: Todo,
} as Meta;

const client = new ApolloClient({
  uri: 'https://jsonplaceholder.typicode.com/todos',
  cache: new InMemoryCache(),
});

export const TodoStory = () => (
  <ApolloProvider client={client}>
    <Todo />
  </ApolloProvider>
);

const todoList = [
  {
    userId: 2,
    id: 1,
    title: 'delectus aut autem',
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 2,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
];

TodoStory.parameters = {
  msw: [
    graphql.query('GetTodo', (req, res, ctx) => {
      return res(
        ctx.data({
          todos: todoList
        })
      );
    }),
  ],
};
