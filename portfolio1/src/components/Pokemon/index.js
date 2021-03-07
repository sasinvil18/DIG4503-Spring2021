import React from "react";

function Pokemon(props){
  console.log(props.data);
  const pic = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.data.id + ".png";


  return(
    <div>
      <p>{props.data.id} <strong>{props.data.name}</strong></p>
      <img src={pic} alt={props.data.name} />
    </div>
  );
}
export default Pokemon;