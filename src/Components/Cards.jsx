import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px] w-[200px]" src={props.img} />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title">{props.name}</h2>
          <div className="card-actions justify-end">
            <Link to={`about/${props.id}`}>
              <button className="btn btn-primary">Know more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
