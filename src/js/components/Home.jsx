import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
  const [listaNombres, setListaNombres] = useState([]);
  const [personajes, setPersonajes] = useState([]);

  const urlBase = "https://dragonball-api.com/api/";

  const getCharacters = async () => {
    try {
      const response = await fetch(`${urlBase}characters?page=1`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      setPersonajes(data.items);
    } catch (error) {
      console.error("Error al obtener personajes:", error.message);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  // Este efecto se ejecuta cuando cambia el estado de  "personajes"
  useEffect(() => {
    if (personajes.length > 0) {
      const nombres = personajes.map(e => e.name);
      setListaNombres(nombres);
    }
  }, [personajes]);// depende de personajes(dependencia)

  console.log("Personajes:", personajes);
  console.log("Nombres:", listaNombres);

return (
  <div className="text-center">
    <h1 className="mt-4">Personajes de Dragon Ball</h1>
    {personajes.length === 0 ? (
      <p>Cargando personajes...</p>
    ) : (
      <div className="row justify-content-center">
        {personajes.map((p) => (
          <div 
            key={p.id} 
            className="card m-2" 
            style={{ width: "10rem", backgroundColor: "#f8f9fa" }}
          >
            <img 
              src={p.image} 
              className="card-img-top" 
              alt={p.name} 
              style={{ height: "150px", objectFit: "contain", padding: "5px" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1rem" }}>{p.name}</h5>
            </div>
          </div>
        ))}
      </div>
    )}
	{listaNombres}
  </div>
);

};

export default Home;
