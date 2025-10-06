import React ,{ useState } from "react";

const GeocodingApp=()=> {
  const [lugar, setLugar] = useState("");
  const [coordenadas, setCoordenadas] = useState(null);

  const handleBuscar = async () => {
    if (!lugar) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(lugar)}&format=json`
      );
      const data = await response.json();
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setCoordenadas({ lat, lon });
      } else {
        setCoordenadas(null);
        alert("No se encontraron coordenadas para este lugar.");
      }
    } catch (error) {
      console.error("Error al buscar coordenadas:", error);
    }
  };
console.log(coordenadas)
  return (
    <div style={{ padding: "20px" }}>
      <h2>Buscar coordenadas de un lugar</h2>
      <input
        type="text"
        value={lugar}
        onChange={(e) => setLugar(e.target.value)}
        placeholder="Escribe un lugar"
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleBuscar}>Buscar</button>

      {coordenadas && (
        <div className="text-white">
          <strong className="text-info">Latitud:</strong> {coordenadas.lat} <br />
          <strong className="text-info">Longitud:</strong> {coordenadas.lon}
        </div>
      )}
    </div>
  );
}

export default GeocodingApp