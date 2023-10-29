import React from "react";
function PopupForm({ handleClose }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div>
          <h3>Sample Form</h3>
          <form className="form">
            <input placeholder="Name" />
            <input placeholder="Number" />
            <textarea placeholder="Address" rows={5} />
            <input placeholder="City" />
            <div className="check">
              <input htmlFor="check" className="check-box" type="checkbox" />
              <label htmlFor="check" className="check-label">
                I agree to the terms and conditions
              </label>
            </div>
            <button onClick={handleClose}>Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupForm;
