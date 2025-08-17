import React  from "react";
import DragonBall from "./DragonBall";
import rigoImage from "../../img/rigo-baby.jpg";
import ListaUsers from "./ListaUsers";

const Home = () => {
  
return (
  <div className="home text-center  bg-dark ">
    <h1 className="text-info">Trabajo con una API</h1>

    <ListaUsers/>
    {/* <DragonBall/> */} 
  </div>
);

};

export default Home;
