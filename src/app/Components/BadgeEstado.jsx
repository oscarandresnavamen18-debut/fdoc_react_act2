import React from 'react'

export default function BadgeEstado() {

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-lg font-semibold text-gray-700 mb-2">Estado</h1>

      {/* Insignia Activo */}
      <span className="px-4 py-1 bg-blue-100 text-blue-700 border border-blue-400 rounded-full text-sm font-medium">
        Activo
      </span>

      {/* Insignia Inactivo */}
      <span className="px-4 py-1 bg-purple-100 text-purple-700 border border-purple-400 rounded-full text-sm font-medium">
        Inactivo
      </span>
    </div>
  );
}
