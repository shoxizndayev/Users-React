import React from "react";
import { Link } from "react-router-dom";
import  "./comments.scss"


const HomePage = () => {
  const [users, setUser] = React.useState([]);

  const [filteredUsers, setFiltredUsers] = React.useState([]);

  const filterUsers = (evt) => {
    const targetValue = evt.target.value.trim();
    const filteredUsersArray = users.filter(
      (user) =>
        user.username.toLowerCase().includes(targetValue) ||
        user.name.toLowerCase().includes(targetValue)
    );

    if (targetValue.length === 0) {
      setFiltredUsers(users);
    } else {
      setFiltredUsers(filteredUsersArray);
    }

    console.log(filteredUsers);
  };

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await response.json();

      if (data) {
        setUser(data);
        setFiltredUsers(data);
      }
    })();
  }, []);

  return (
    <main>
      <input type="text" onChange={filterUsers} />

      <ul className="comments__list">
        {filteredUsers &&
          filteredUsers.map((user) => (
            <li key={user.id} className="home_item">
              <h3>{user.name}</h3>

              <Link to={"/posts/" + user.id}>Posts</Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default HomePage;
