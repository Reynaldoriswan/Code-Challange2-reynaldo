import React, { useEffect, useState } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='font-semibold text-5lg'>MOVE WITH JOY TEAM</h1>
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
    </div>
  );
};

export default RandomUser;