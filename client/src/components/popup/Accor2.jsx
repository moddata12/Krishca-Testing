import { useState, useEffect } from "react";
import { Accordion, Spinner, Tooltip, OverlayTrigger } from "react-bootstrap";

function RunningTimeAccordion({ measurementData, dg2RunningTime }) {
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRunningTime, setUpdatedRunningTime] = useState(dg2RunningTime);

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second load time
  }, []);

  // Inline edit function for running time
  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);
  const handleCancelClick = () => setIsEditing(false);

  const handleTimeChange = (e) => {
    setUpdatedRunningTime({
      ...updatedRunningTime,
      [e.target.name]: e.target.value,
    });
  };

  // Tooltip for additional info
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      The time the DG2 panel has been running.
    </Tooltip>
  );

  return (
    <Accordion.Item eventKey="1" className="accordion-item-custom">
      <Accordion.Header className="accordion-header-custom">
        <h5 className="d-flex justify-content-between w-100 text-dark mb-0">
          <span>DG2 Running Time</span>
          <span>
            Total:{" "}
            {updatedRunningTime.days}d {updatedRunningTime.hours}h{" "}
            {updatedRunningTime.minutes}m
          </span>
        </h5>
      </Accordion.Header>
      <Accordion.Body className="accordion-body-custom">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <>
            <h6 className="bg-light p-3 text-dark rounded">
              <strong>Last updated time of DG2 Panel:</strong>{" "}
              {convertToIndianTime(measurementData.lastUpdatedMid12)} <br />
              <strong>Last updated time of Main MV Panel:</strong>{" "}
              {convertToIndianTime(measurementData.lastUpdatedMid13)} <br />
              <div className="running-time mt-3 mb-2">
                <strong>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <span>Total Running time of DG2:</span>
                  </OverlayTrigger>{" "}
                </strong>
                {isEditing ? (
                  <div className="mt-2">
                    <input
                      type="number"
                      name="days"
                      value={updatedRunningTime.days}
                      onChange={handleTimeChange}
                      className="form-control mb-1"
                      placeholder="Days"
                    />
                    <input
                      type="number"
                      name="hours"
                      value={updatedRunningTime.hours}
                      onChange={handleTimeChange}
                      className="form-control mb-1"
                      placeholder="Hours"
                    />
                    <input
                      type="number"
                      name="minutes"
                      value={updatedRunningTime.minutes}
                      onChange={handleTimeChange}
                      className="form-control mb-1"
                      placeholder="Minutes"
                    />
                    <button
                      className="btn btn-success btn-sm"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>{" "}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="running-time-details">
                      {updatedRunningTime.days} days, {updatedRunningTime.hours}{" "}
                      hours, {updatedRunningTime.minutes} minutes
                    </span>{" "}
                    <button
                      className="btn btn-outline-secondary btn-sm ml-2"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            </h6>
          </>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default RunningTimeAccordion;