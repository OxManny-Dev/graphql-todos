import { gql } from '@apollo/client';

export const FETCH_TODOS = gql`
    query fetchTodos {
        todos {
            _id
            task
            completed
        }
    }
`;
