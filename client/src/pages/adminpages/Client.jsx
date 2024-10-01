import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"; // Import Modal
import AdminNavbar from "../../components/layouts/AdminNavbar";
import Footer from "../../components/layouts/Footer";
import "../../components/table/css/report.css";
import bgImg from "../../assets/bg-img.jpg";
import MetaData from "../../components/layouts/MetaData";

const Client = () => {
  const [details, setDetails] = useState([]);
  const [editDetail, setEditDetail] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to show/hide the modal
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const BackUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // Fetch data from the server
    axios
      .get(`${BackUrl}/api/client`)
      .then((res) => {
        if (res.data === "Success") {
          // Fetch details data if verification succeeds
          axios
            .get(`${BackUrl}/api/info/details`)
            .then((res) => {
              setDetails(res.data);
            })
            .catch((err) => {
              console.log("Error fetching details:", err);
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

  const handleDelete = (id) => {
    axios
      .delete(`${BackUrl}/api/info/details/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        setDetails(details.filter((detail) => detail._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting detail:", error);
      });
  };

  const handleEdit = (detail) => {
    setEditDetail(detail);
    setShowModal(true); // Show the modal when editing
  };

  const handleSave = () => {
    if (editDetail._id) {
      axios
        .put(
          `${BackUrl}/api/info/details/${editDetail._id}`,
          editDetail,
          { withCredentials: true }
        )
        .then((response) => {
          setDetails(
            details.map((detail) =>
              detail._id === editDetail._id ? response.data : detail
            )
          );
          setEditDetail(null);
        })
        .catch((error) => {
          console.error("Error updating detail:", error);
        });
    } else {
      axios
        .post(`${BackUrl}/api/info/details`, editDetail, {
          withCredentials: true,
        })
        .then((response) => {
          setDetails([...details, response.data]);
          setEditDetail(null);
        })
        .catch((error) => {
          console.error("Error creating detail:", error);
        });
    }
    setShowModal(false); // Close the modal after saving
  };

  const handleAddDetail = () => {
    setEditDetail({
      incomingSide: "",
      source: "",
      busductCable: "",
      vcbAcb: "",
      outgoingTo: "",
    });
    setShowModal(true); // Show modal for adding new details
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <AdminNavbar />

      <MetaData title={'Details'}/>

      <div className="container text-center mt-2 mb-2 bg-light border border-primary border-1 rounded p-4">
        <h3 className="bg-primary text-center text-white rounded p-2 mt-2">
          Detail Management System
        </h3>
 
        <div className="bg-white fw-medium fs-1 mt-2 mb-2 border border-primary border-3 rounded">
          <p className="fs-3 mb-2 text-primary">KRISHCA STRAPING SOLUTIONS PVT LTD,</p>
          <p className="fs-5 mt-2 text-muted">
            BUILDING 01B, CASA GRANDE DISTRIPARK, <br />
            SATHARAI VILLAGE, MAPPEDU, <br />
            THIRUVALLUR DISTRICT, <br />
            TAMILNADU - 631 203.
          </p>
        </div>

        <div className="bg-white border border-primary border-3 rounded p-2 mt-2 mb-2">
          <p className="d-flex justify-content-start mb-1 mt-2">
            <Button variant="success" onClick={handleAddDetail}>Add Details</Button>
          </p>

          <Table striped bordered hover size="sm">
          <>
                <thead
                  style={{ backgroundColor: "#007bff", color: "#fff" }}
                  className="fs-5 p-3"
                  id="header"
                >
                  <tr>
                    <th style={{ backgroundColor: "#007bff", color: "#fff" }}>
                      Incoming Side
                    </th>
                    <th style={{ backgroundColor: "#007bff", color: "#fff" }}>
                      Source
                    </th>
                    <th style={{ backgroundColor: "#007bff", color: "#fff" }}>
                      Busduct/Cable
                    </th>
                    <th style={{ backgroundColor: "#007bff", color: "#fff" }}>
                      VCB/ACB
                    </th>
                    <th style={{ backgroundColor: "#007bff", color: "#fff" }}>
                      Outgoing to
                    </th>
                    <th style={{ backgroundColor: "#007bff", color: "#fff" }}>
                      Action
                    </th>
                  </tr>
                </thead>
              </>
            <tbody>
              {details.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.incomingSide}</td>
                  <td>{detail.source}</td>
                  <td>{detail.busductCable}</td>
                  <td>{detail.vcbAcb}</td>
                  <td>{detail.outgoingTo}</td>
                  <td>
                    <Button variant="primary" className="me-2" onClick={() => handleEdit(detail)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(detail._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Footer />

      {/* Modal for editing/adding details */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editDetail?._id ? "Edit Detail" : "Add Detail"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Incoming Side</label>
            <input
              className="form-control"
              value={editDetail?.incomingSide || ""}
              onChange={(e) =>
                setEditDetail({ ...editDetail, incomingSide: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Source</label>
            <input
              className="form-control"
              value={editDetail?.source || ""}
              onChange={(e) =>
                setEditDetail({ ...editDetail, source: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Busduct/Cable</label>
            <input
              className="form-control"
              value={editDetail?.busductCable || ""}
              onChange={(e) =>
                setEditDetail({ ...editDetail, busductCable: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>VCB/ACB</label>
            <input
              className="form-control"
              value={editDetail?.vcbAcb || ""}
              onChange={(e) =>
                setEditDetail({ ...editDetail, vcbAcb: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Outgoing To</label>
            <input
              className="form-control"
              value={editDetail?.outgoingTo || ""}
              onChange={(e) =>
                setEditDetail({ ...editDetail, outgoingTo: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Client;
