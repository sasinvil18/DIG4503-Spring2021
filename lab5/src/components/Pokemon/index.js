import React from "react";

function Pokemon(props){

  return(
    <div>
      <h2>{props.data.name}</h2>
      <p>{props.data.id}</p>
      <img src= {props.data.sprites}/>
    </div>
  );

}

export default Pokemon;