import React from 'react'

export default function AvisoInline() {
    const Aviso = {
    backgroundColor: "#a13f3fff",
    border: "2px solid #c4a3a3ff",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    margin: "20px auto",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };
  return (
    <div style={Aviso}>
      <h2 style={{ color: "#640303ff", marginBottom: "10px" }}>
        Aviso Importante
      </h2>
      <p style={{ color: "#f5f5f5ff", fontSize: "16px" }}>
Precaucion       </p>
    </div>
  )
}
