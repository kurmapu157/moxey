import React from "react";

const TopHeader = ({ countries, isLoading }) => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-between bottom-shadow"
      style={{
        height: "50px",
      }}
    >
      <div>Rudra Transporter - Transporter</div>
      <div className="d-flex gap-2 align-items-center">
        <input
          type="date"
          style={{
            padding: "0.2rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            outline: "none",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#007bff";
            e.target.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#ccc";
            e.target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
          }}
        />
        <select
          style={{
            width: "200px",
            padding: "0.2rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            outline: "none",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#007bff";
            e.target.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#ccc";
            e.target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
          }}
        >
          {isLoading ? (
            <option>Loading...</option>
          ) : (
            countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
