import React, { useEffect } from "react";
import axios from "axios";

function ViewAllPage({ users, setUsers, setSelectedUser, deleteUser }) {
  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8030/");
        setUsers(response.data); // Initial fetch to populate users
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8030/delete/${id}`);
      deleteUser(id); // Call deleteUser to remove user from the state
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  return (
    <div className="card p-4">
      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>City</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.city}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.salary}</td>
                <td>
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => setSelectedUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewAllPage;
