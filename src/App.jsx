import UsersCard from "./components/UsersCard";
import SelectedCard from "./components/SelectedCard";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState(false);
  const url =
    "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.data !== undefined) {
          setError(false);
          setUsers(res.data.results);
        } else {
          setError(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <main className="main">
      <nav className="nav">
        <div>
          <h3>YoungLabs</h3>
        </div>
        <div className="nav-sec">
          <h4>Product</h4>
          <h4>Download</h4>
          <h4>Pricing</h4>
        </div>
      </nav>
      <div className="cards">
        {selectedUser && (
          <div>
            <SelectedCard users={users} selectedUser={selectedUser - 1} />
          </div>
        )}
        <div>
          <UsersCard
            users={users}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
        {error && <h1>Server is Not Responding Try Again</h1>}
      </div>
    </main>
  );
};

export default App;
