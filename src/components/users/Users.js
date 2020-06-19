import React, { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGrap: '1rem',
};
export default Users;
