import React from "react";

export default function BadgeEstado() {
  
  const Badge = ({ children, color }) => {
    const base = "px-4 py-1 border rounded-full text-sm font-medium";
    const colors = {
      azul: "bg-blue-100 text-blue-700 border-blue-400",
      morado: "bg-purple-100 text-purple-700 border-purple-400"
    };

    return (
      <span className={`${base} ${colors[color]}`}>
        {children}
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-lg font-semibold text-gray-700">Estado</h2>

      <Badge color="azul">Activo</Badge>
      <Badge color="morado">Inactivo</Badge>
    </div>
  );
}
