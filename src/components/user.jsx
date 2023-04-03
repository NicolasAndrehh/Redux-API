/* eslint-disable react/prop-types */
const User = ({ user }) => {
  const { title, first, last } = user.name;

  return (
    <div className="user-card">
      <p>{`- ${title} ${first} ${last}`}</p>
    </div>
  );
};

export default User;
