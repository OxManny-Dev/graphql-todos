/* typeDefs is short for typeDefinitions */
const { gql } = require('apollo-server-express');

// Queries and Mutations
const typeDefs = gql`
	type User {
      _id: ID
      firstName: String
      lastName: String
			fullName: String
			nameLength: Int
			todos: [Todo]
	}
	
	type Todo {
			_id: ID
      task: String
			completed: Boolean
			userId: String
			user: User
	}
  
  type Query {
      user(id: String!): User
			users: [User]
			todo(id: String!): Todo
			todos: [Todo]
  }
	
	type Mutation {
			createUser(firstName: String!, lastName: String!, password: String!): User
			createTodo(task: String!, userId: String!, completed: Boolean): Todo
	}
`;

module.exports = typeDefs;
