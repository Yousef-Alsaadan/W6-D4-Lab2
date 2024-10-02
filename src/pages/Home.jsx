import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://6657369e9f970b3b36c865b0.mockapi.io/Images/")
      .then(function (response) {
        setCharacters(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen mb-8"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/c2/ba/87/c2ba874a4bd0e3bb30fe18b1b0c10cf4.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">
              <a href="#cards">Get Started</a>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto gap-8 grid grid-cols-3" id="cards">
        {characters.map((i, index) => {
          return <Cards key={index} img={i.image} name={i.name} id={i.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
