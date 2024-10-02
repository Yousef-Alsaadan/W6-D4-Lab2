import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function About() {
  let { characterId } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://6657369e9f970b3b36c865b0.mockapi.io/Images/${characterId}`
        );
        setCharacter(response.data);
        console.log(character);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (characterId) {
      fetchPosts();
    }
  }, [characterId]);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={character.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{character.name}</h1>

            <p className="py-6">hair color: {character.hair}</p>

            <p className="py-6">status: {character.status}</p>

            <p className="py-6">class: {character.species}</p>

            <p className="py-6">gender: {character.gender}</p>

            <p className="py-6">planet: {character.origin}</p>

            <button className="btn btn-primary">Back Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
