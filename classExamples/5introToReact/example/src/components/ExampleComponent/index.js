import React from "react";

//class must match the name with a capital letter to emphasize it is not an existing HTML name
class ExampleComponent extends React.Component {
    //must have render method
    render(){
        return(
            //must  be in curly brackets when using properties in tags
            <p>{this.props.name}</p>
        );
    }
}

export default ExampleComponent;