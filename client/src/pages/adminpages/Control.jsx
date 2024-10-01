import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import EditableText from "../../components/popup/EditableText";
import UserControlModal from "../../components/popup/UserControlModal";
import AdminNavbar from "../../components/layouts/AdminNavbar";
import Footer from "../../components/layouts/Footer";
import bgImg from "../../assets/bg-img.jpg";
import MetaData from "../../components/layouts/MetaData";

function Control() {
  const [suc, setSuc] = useState(null);
  const [users, setUsers] = useState([]); // State to store users data
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const BackUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${BackUrl}/api/control`)
      .then((res) => {
        if (res.data === "Success") {
          setSuc("Succeeded OK");
          // Fetch users data if verification succeeds
          axios
            .get(`${BackUrl}/api/import/users`)
            .then((res) => {
              setUsers(res.data);
            })
            .catch((err) => {
              console.log("Error fetching users:", err);
            });
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/"); // Navigate to the homepage or login page if there's an error
      });
  }, [navigate]);

  const handleCreateUser = () => {
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleSaveUser = (user) => {
    if (selectedUser) {
      axios
        .put(`${BackUrl}/api/import/users/${selectedUser._id}`, user)
        .then((res) => {
          setUsers(
            users.map((u) => (u._id === selectedUser._id ? res.data : u))
          );
        })
        .catch((err) => {
          console.error("Update user error: ", err);
        });
    } else {
      axios
        .post(`${BackUrl}/api/verify/register`, user)
        .then((res) => {
          setUsers([...users, res.data]);
        })
        .catch((err) => {
          console.error("Create user error: ", err);
        });
    }
    setShowModal(false);
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`${BackUrl}/api/import/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((err) => {
        console.error("Delete user error: ", err);
      });
  };

  const handleUpdateUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <AdminNavbar />

      <MetaData title={'Users'}/>

    <div className="container border border-primary border-3 rounded p-4 mt-2 mb-2 bg-light">
      <h3 className="bg-primary text-center text-white rounded p-2 mt-2">
      User Management System
        </h3>
        <button onClick={handleCreateUser} className="btn btn-success mb-1 mt-1">
          Create User
        </button>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th style={{ backgroundColor: "#007bff", color: "#fff" }}>S.no</th>
              <th style={{ backgroundColor: "#007bff", color: "#fff" }}>User Name</th>
              <th style={{ backgroundColor: "#007bff", color: "#fff" }}>Email</th>
              <th style={{ backgroundColor: "#007bff", color: "#fff" }}>User Type</th>
              <th style={{ backgroundColor: "#007bff", color: "#fff" }}>Service</th>
              <th style={{ backgroundColor: "#007bff", color: "#fff" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <EditableText
                    text={user.name}
                    onSave={(value) => handleSaveUser({ ...user, name: value })}
                  />
                </td>
                <td>
                  <EditableText
                    text={user.email}
                    onSave={(value) =>
                      handleSaveUser({ ...user, email: value })
                    }
                  />
                </td>
                <td>
                  <EditableText
                    text={user.role}
                    onSave={(value) => handleSaveUser({ ...user, role: value })}
                  />
                </td>
                <td>
                  <EditableText
                    text={user.service}
                    onSave={(value) =>
                      handleSaveUser({ ...user, service: value })
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleUpdateUser(user)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />

      <UserControlModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveUser}
        user={selectedUser}
      />
    </div>
  );
}

export default Control;
