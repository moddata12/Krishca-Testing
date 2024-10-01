import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AdminNavbar from '../../components/layouts/AdminNavbar';
import Footer from '../../components/layouts/Footer';
import bgImg from '../../assets/bg-img.jpg';
import MetaData from '../../components/layouts/MetaData';
import EditableText from '../../components/popup/EditableText';
import UserControlModal from '../../components/popup/UserControlModal';

function Control() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const BackUrl = import.meta.env.VITE_BACKEND_URL;

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get('http://16.171.15.161:3001/api/control'
      })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch(() => {
        setError('Unauthorized access');
        navigate('/login');
      });
  }, [navigate, BackUrl]);

  return (
    <div>
      <AdminNavbar />
      <MetaData title="Control" />

      <div style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
      }}>
        <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
          <h5 className="text-primary bg-white p-2" style={{ borderRadius: '5px' }}>
            User Control
          </h5>
        </div>

        {error && <p className="alert alert-danger">{error}</p>}

        <Table striped bordered hover responsive="md" className="bg-white">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Service</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.service}</td>
                <td>
                  <EditableText initialText={user.role} />
                  <UserControlModal user={user} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Footer />
    </div>
  );
}

export default Control;
