import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { FETCH_TODOS } from './graphql/queries/fetchTodos';
import { Users } from './Users';

function App() {

  const {data, loading, error} = useQuery(FETCH_TODOS);

  if (error) {
    return <h1>{error}</h1>;
  }


  return loading ?
    <h1>Loading......</h1>
    :
    <div>
      <Routes>
        <Route
          path='/'
          element={<Login/>}
        />
        <Route
          path='/success'
          element={<h1>WAGMI</h1>}
        />
        <Route
          path='/users'
          element={<Users/>}
        />

      </Routes>
    </div>
}

export default App;
