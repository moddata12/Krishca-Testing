import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsActivity } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";

const Grid3 = () => {
  const [maxPower, setMaxPower] = useState(null);
  const [loading, setLoading] = useState(true);
  const BackUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchMaxPower = async () => {
      try {
        const response = await axios.get(
          `${BackUrl}/api/getPreviousMaxPower`
        );
        const data = response.data;
        if (data && data.length > 0) {
          setMaxPower(data[0].max_power);
        }
      } catch (error) {
        console.error("Error fetching max power:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchDataInterval = setInterval(fetchMaxPower, 5000);
    fetchMaxPower();
    return () => clearInterval(fetchDataInterval);
  }, []);

  return (
    <div className="col">
      <div className="col">
      <div className="card bg-secondary border border-dark border-1 p-2 shadow">
      <h5 className="card-title fs-3 text-warning">
            <BsActivity />
          </h5>
          <h6 className="card-subtitle mb-2 text-white fs-5">Previous Month</h6>

          <h6 className="card-subtitle mb-2 text-warning fs-3">
            {loading ? (
              <Spinner animation="grow" variant="warning" />
            ) : maxPower !== null ? (
              `${maxPower} kWh`
            ) : (
              "kWh"
            )}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Grid3;
