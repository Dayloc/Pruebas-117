import React  from "react";
import DragonBall from "./DragonBall";
import rigoImage from "../../img/rigo-baby.jpg";
import ListaUsers from "./ListaUsers";
import GeocodingApp from "./Geocoding";

const Home = () => {
  
return (
  <div className="home text-center  ">
    <h1 className="text-info">Trabajo con una API</h1>
  <GeocodingApp/>
   {/*  <ListaUsers/> */}
    {/* <DragonBall/> */} 
  </div>
);

};

export default Home;
