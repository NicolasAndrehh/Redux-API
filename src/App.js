import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './Redux/users/usersSlice';
import Users from './components/users';

function App() {
  const { isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error !== undefined) {
    return (
      <div>
        <h1>Opps... Something went wrong</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
