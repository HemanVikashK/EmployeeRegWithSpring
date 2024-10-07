import React, { useState } from "react";
import RegisterPage from "./RegisterPage";
import ViewAllPage from "./ViewAllPage";
import EditModal from "./EditModal";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to add a new user to the users array
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // Function to delete a user from the users array
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  // Function to update a user in the users array
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setSelectedUser(null); // Close the modal after updating
  };

  return (
    <div className="container">
      <RegisterPage addUser={addUser} />
      <ViewAllPage
        users={users}
        setUsers={setUsers}
        setSelectedUser={setSelectedUser}
        deleteUser={deleteUser}
      />
      {selectedUser && (
        <EditModal
          user={selectedUser}
          updateUser={updateUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
}

export default App;
