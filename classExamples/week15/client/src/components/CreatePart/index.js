import Axios from "axios"

function CreatePart(){

  const putPart = async() => {
    //usually do + whatever variable
    const response = await Axios.put("http://localhost:45030/parts/777", {
      title: "hello",
      description: "world"
    });
    console.log(response.data);
  }


  return(
    <div>
      <p>Click Btton</p>
      <button onClick = {() => {
        {putPart()}
      }}>Click Me!</button>
    </div>
  );
}

export default CreatePart;