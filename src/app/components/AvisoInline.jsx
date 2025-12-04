import React from 'react';

export default function AvisoInline() {

  const avisoStyle = {
    backgroundColor: "#a13f3f",
    border: "2px solid #c4a3a3",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    margin: "20px auto",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };

  return (
    <div style={avisoStyle}>
      <h2 style={{ color: "#640303", marginBottom: "10px" }}>
        Aviso Importante
      </h2>

      <p style={{ color: "#f5f5f5", fontSize: "16px" }}>
        Precaución
      </p>
    </div>
  );
}
