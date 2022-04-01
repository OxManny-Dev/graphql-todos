import { useQuery } from '@apollo/client';

import { FETCH_TODOS } from './graphql/queries/fetchTodos';

function App() {

  const {data, loading, error} = useQuery(FETCH_TODOS);


  if (error) {
    return <h1>{error}</h1>;
  }

  return loading ?
    <h1>Loading......</h1>
    :
    <div>
      {
        data?.todos?.map(todo => <h1>{todo.task}</h1>)
      }
    </div>
}

export default App;
