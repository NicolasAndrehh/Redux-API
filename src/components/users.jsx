import { useSelector } from 'react-redux';
import User from './user';

const Users = () => {
  const { users } = useSelector((store) => store.users);

  return (
    <div>
      <div>
        <h1>Our users</h1>
        {users.map((user) => (
          <User key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
